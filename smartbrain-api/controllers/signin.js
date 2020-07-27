const handleSignIn = (req,res,db,bcrypt)=>{
	const {email,password} = req.body
		if(!email ||  !password)
		return res.status(400).json('Incorrect form submission')
	return db.select('email','password').from('login')
	.where('email','=',req.body.email)
	.then(data=>{
		const isValid=bcrypt.compareSync(password,data[0].password);
		if(isValid){
			db.select('*').from('users').where('email','=',email)
			.then(user=>{
				res.json(user[0])
			})
			.catch(err=>{
				res.status(400).json('unable to get user')
			})
		}
		else
			res.status(400).json('wrong password')
	})
    .catch(err=>res.status(400).json('wrong credentials'))
}

module.exports={
	handleSignIn:handleSignIn
}