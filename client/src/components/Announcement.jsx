import style from "styled-components"


const Container = style.div `
          height: 30px;
          background: teal;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 14px;
          font-weight: 500;
`


const Announcement = () => {


          return (
                    <Container>
                              Super Deal! Free Shipping on Orders Over $50
                    </Container>
          )
}


export default Announcement
