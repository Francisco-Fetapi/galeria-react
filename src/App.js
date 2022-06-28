import './App.css';
import React, { useRef, useState,useEffect } from 'react';

// Do Material-UI
import CssBaseline from '@material-ui/core/CssBaseLine'
import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


// Meus componentes personalizados
import Fotos from './Fotos';
import Footer from './Footer';
import API from './API';
import Loading from './Loading';
import Alert from '@material-ui/lab/Alert';


function App() {

  const [fotos,setFotos] = useState([]);
  const [iniciando,setIniciando] = useState(true);
  const [requisitou,setRequisitou] = useState(false);
  const [legenda,setLegenda] = useState({
    text:'',
    error:false,
    helperText:''
  });
  const [dark,setDark] = useState(true);
  const [fotoSelecionada,setFotoSelecionada] = useState({
    legenda:'',
    id:null
  });
  const [modal,setModal] = useState(false);
  const [msg,setMsg] = useState({
    tipo:'success',
    aberto:false,
    conteudo:''
  });
  const inputFile = useRef();
  useEffect(()=>{
    obter_fotos();
  },[]);

  async function obter_fotos(){
    let res = await API.obter_fotos();
    setFotos(res.dados);
    if(iniciando) setIniciando(false);
    
    terminarRequisicao();
  }
  
  function mudarLegenda(e){
    let error;
    let helperText;
    if(legenda.error && legenda.text){
      error = false;
      helperText = '';
    }
    setLegenda({...legenda,helperText,error,text:e.target.value});
  }
  async function enviarFoto(e){
    const file = inputFile.current.files[0];
    e.target.setAttribute('disabled','disabled');

    if(!file || !legenda.text.length>0){
      setLegenda({...legenda,helperText:'Legenda e/ou Ficheiro invalidos!',error:true}) 
      return false;
    }
    if(!file.type.includes('image')){ //nao eh uma imagem
      setLegenda({...legenda,helperText:'Este arquivo não é uma imagem!',error:true}) 
      return false;
    }
    if(file.size/1024 > 1024){
      const tamanho = file.size/(1024**2);

      const size = `${tamanho.toFixed(2)} MB`;
      setLegenda({...legenda,helperText:`Este arquivo tem ${size} e por isso é pesado demais!`,error:true}) 
      return false;
    } // eh maior que um MB

    enviarRequisicao();
    const data = new Date();
    const data_final = `${data.getFullYear()}/${data.getMonth()+1}/${data.getDate()}`;

    const res = await API.cadastrar_foto(legenda.text,file.name,data_final,file)
    informar(res);
    if(res.status){
      obter_fotos();
      setLegenda({...legenda,text:''});
      inputFile.current.value = '';
    } 
  }
  function informar(res){
    let tipo = 'success';
    if(!res.status){
      tipo = 'error';
    }
    abrirMSG(res.msg,tipo,2);
  }
  async function apagar_foto(id_foto){
    enviarRequisicao();
    const res = await API.apagar_foto(id_foto);
    informar(res);
    obter_fotos();
  }
  function fecharMSG(){
    setMsg({...msg,aberto:false,conteudo:''});
  }
  function abrirMSG(conteudo,tipo,segundos){
    setMsg({tipo,conteudo,aberto:true});
    // setTimeout(fecharMSG,segundos*1000)
  }
  function fecharModal(){
    setModal(false);
  }
  function abrirModal(id,legenda){
    setModal(true);
    setFotoSelecionada({legenda,id})
  }
  function mudarLegendaFotoSelecionada(e){
    setFotoSelecionada({...fotoSelecionada,legenda:e.target.value});
  }
  async function alterarLegenda(){
    enviarRequisicao();
    const {id,legenda} = fotoSelecionada;

    const res = await API.alterar_legenda(id,legenda);
    informar(res);

    obter_fotos();
    fecharModal();
  }
  function enviarRequisicao(){
    setRequisitou(true);
  }
  function terminarRequisicao(){
    setRequisitou(false);
  }
  function mudarTema(){
    setDark(!dark);
  }

  const theme = createMuiTheme({
    palette:{
      type:dark ? 'dark':'light',
      primary:{
        main:dark?'#4561fb':'#3f51b5'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      {requisitou && 
        <Box position="fixed" width="100%">
          <LinearProgress />
        </Box>
      }
      <Box className={`App ${dark?'dark':''}`} display="flex" flexDirection="column" minHeight="100vh" justifyContent="center">
        <CssBaseline />

        <Box className={`form ${legenda.error?'erro':''}`} marginBottom="30px">
          <Box display="flex" justifyContent="center">
            <Typography className="titulo_main" variant="h6">Compartilhe alguma foto</Typography>
          </Box>
          <Box className="campos" onDoubleClick={mudarTema} display="flex" flexDirection="column">
              <input type="file" ref={inputFile}/>
              <br />
              <TextField helperText={legenda.helperText} error={legenda.error} value={legenda.text} onChange={mudarLegenda} size="small" InputLabelProps={{shrink:true}} label="Digite alguma legenda"/>
              <br />
              <Box display="flex" justifyContent="center">
                <Button variant="contained" disabled={requisitou} color="primary" onClick={enviarFoto}>Enviar Foto</Button>
              </Box>
          </Box>
          <Box marginTop={2}>
            <Typography align="center" style={{fontSize:13}} color="textSecondary"><b>2 cliques</b> consecutivos no quadro acima <b>altera o tema da aplicação!</b></Typography>
          </Box>
        </Box>

        <Fotos fotos={fotos} abrirModal={abrirModal} apagar_foto={apagar_foto} url_base={API.API_URL}/>
      </Box>
    <Footer />
    <Snackbar autoHideDuration={1500} anchorOrigin={{vertical:'bottom',horizontal:'left'}} open={msg.aberto} onClose={fecharMSG}>
      <Alert severity={msg.tipo} onClose={fecharMSG}>
        {msg.conteudo}
      </Alert>
    </Snackbar>

    <Dialog fullWidth open={modal} onClose={fecharModal}>
      <DialogTitle>Alterar Legenda</DialogTitle>
      <DialogContent>
      <TextField fullWidth helperText={fotoSelecionada.helperText} error={fotoSelecionada.error} value={fotoSelecionada.legenda} onChange={mudarLegendaFotoSelecionada} size="small" InputLabelProps={{shrink:true}} label="Digite alguma legenda"/>
      </DialogContent>
      <DialogActions>
        <Button size="small" color="primary" variant="text" onClick={alterarLegenda}>Guardar</Button>
        <Button size="small" color="primary" variant="text" onClick={fecharModal}>Voltar</Button>
      </DialogActions>
    </Dialog>

    <Loading aberto={iniciando}/>
    </ThemeProvider>
  );
}

export default App;
