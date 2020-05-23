import React, { useState,useContext } from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'


const Search = () =>{

    const githubContext = useContext(GithubContext)
    const [text,setText] = useState('')

    const alertContext = useContext(AlertContext)

    const onChange = (e) => {
        setText(e.target.value)//**we can also write text as [e.target.name]
    }

    const onSubmit = (e) =>{
        if(text === ''){
            alertContext.setAlert('Please Enter Something...', 'light')
        }
        else{
            e.preventDefault()
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" //** 
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"   
                />
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
                Clear</button>
            }
        </div>
    )
}

export default Search
