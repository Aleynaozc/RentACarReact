

import React from 'react'

function SaveCars() {
  return (
    <div className='row '>
         <h1 className='d-flex justify-content-center'>Save Cars</h1>
     <div className='d-flex justify-content-center'>

        <div class="col-9">

            <form asp-action="Create">
                <input asp-for="ID" hidden />
                <div class="mb-3">
                    <label class="form-label">Brand</label>
                    <input type="text" class="form-control" asp-for="Name"/>

                </div>
                <div class="mb-3">
                    <label class="form-label">Model</label>
                    <input type="text" class="form-control" asp-for="Author"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Daily Price</label>
                    <input type="text" class="form-control" asp-for="Price"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Fuel Type</label>
                    <input type="text" class="form-control" asp-for="Price"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Transmission Type</label>
                    <input type="text" class="form-control" asp-for="Price"/>
                </div>
                
                <div class="mb-3">
                    <label class="form-label">Image Url</label>
                    <input type="text" class="form-control" asp-for="ImgUrl"/>
                </div>
               
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </div>
    </div>
</div>

  )
}

export default SaveCars