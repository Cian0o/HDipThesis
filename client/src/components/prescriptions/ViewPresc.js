import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";


const ViewPresc = () => {
    return(
        <section className="landing">
            <>
                <div className="prescTable">
                <p> Your Prescription is: </p>
                <table border={12}>
                    <thead>
                    <tr>
                        <td>Patient PPS Number</td>
                        <td>
                            {"{"}
                            {"{"}row["PPSN"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Patient Name</td>
                        <td>
                            {"{"}
                            {"{"}row["patientName"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Frequency (Days)</td>
                        <td>
                            {"{"}
                            {"{"}row["presFreQ"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Contents</td>
                        <td>
                            {"{"}
                            {"{"}row["prescContents"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Dosage (MG)</td>
                        <td>
                            {"{"}
                            {"{"}row["prescDosageMG"]{"}"}
                            {"}"}
                        </td>
                    </tr>

                    </thead>
                </table>
                </div>
                <table></table>
            </>


        </section>

    );
}

export default ViewPresc;