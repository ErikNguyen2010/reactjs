import React from 'react'

export default function DemoApiRFC() {
  return (
    <div>
      <div className='container'>
          <h3 className="text-center display-4">To do list</h3>
          <div className="d-flex justify-content-center ">
              <table className="table w-50 text-center">
                <tbody>
                  <tr>
                    <td>Tập thể duc</td>
                    <td>
                      <span className="badge badge-danger">Incomplete</span>
                      <span className="fa fa-check text-success ml-2" style={{fontSize: 25}}></span>
                    </td>
                  </tr>
                  <tr>
                    <td>Làm bài tập</td>
                    <td>
                      <span className="badge badge-danger">Incomplete</span>
                      <span className="fa fa-check text-success ml-2" style={{fontSize: 25}}></span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                  <td>Tập thể dục</td>
                    <td>
                      <span className="badge badge-success">Complete</span>
                    </td>
                  </tr>
                  <tr>
                  <td>Làm bài tập</td>
                    <td>
                      <span className="badge badge-success">Complete</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
          </div>
      </div>
    </div>
  )
}
