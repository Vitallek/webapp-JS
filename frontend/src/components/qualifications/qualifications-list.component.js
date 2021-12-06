import React from 'react';
import axios from 'axios';
import AddQualification from './add-qualification.component';
import EditQualification from './editQualification.component';
import DeleteQualification from './deleteQualification.component';


const apiUrl = "http://localhost:5000/qualifications";

export default class QualificationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      qualifications: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const qualifications = res.data;
        this.setState({ qualifications });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div>
        <div className="adminContainer">

          <div className="tableContainer">
            
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border tableHeader">Id</div>  
                  <div className="col border tableHeader">qualifications's name</div>      
                  <div className="col border tableHeader">qualification's price multiplier</div> 
                </div>
              </div>

              { this.state.qualifications.map(Qualifications => 
                <div className="ml-3" key={Qualifications.id}>
                  <div className="row" >  
                    <div className="col-1 border">{Qualifications.id}</div>  
                    <div className="col border">{Qualifications.qual_name}</div>      
                    <div className="col border">{Qualifications.koef}</div>
                  </div>
                </div>
                )}
          </div>
          </div>
          <div className="col sidebar-wrapper">
          <div>
            <AddQualification/>
          </div>
          <div>
            <EditQualification />
          </div>
          <div>
            <DeleteQualification/>
          </div>
          </div>
      </div>
    )
  }
}