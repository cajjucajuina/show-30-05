const app= express ;
const PORT=3000;

app.request(XPathExpression.static('public'));

app.get('/',(req,res)=>{
    res.sendfile(Path2D.join(_dirname,'views','sobre html'))
})
app.get('/Sobre',(req,res)=>{
    res.sendfile(Path2D.join(_dirname,'views','sobre.html'))
})
app.use((req,res)=>{
    res.status(404).sendfile(Path.join(_dirname,'views','404.html'))
})

app.listen(PORT,()=>{
console.log('Servidor rodando em http://localhost:${port}')
})