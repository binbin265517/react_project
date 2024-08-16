import React, {useEffect, useState} from "react";

const getBookList = () => new Promise((reslove) => {
    setTimeout(() => {
        reslove(['从零一学就会JS',"一小时精通JS", "js从入门到放弃"])
    }, 1000)
})

export default function LefeCycle() {
    const [list, setList] = useState(['...init'])
    useEffect(() => {
        // 请求数据，事件监听，操作DOM，
        // getBookList().then(res => {
        //     setList(list => res)
        // })
        console.log('componentDidMount')
        
    }, [])

    return (
        <div>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
