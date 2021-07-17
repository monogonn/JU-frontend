import React, { useEffect, useState } from "react";
import endpoints from "../../endpoints";
import axios from "axios";

function Bingo() {
  const [places, setPlaces] = useState([]);

  useEffect(
    () =>
      axios
        .get(endpoints.places, {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(res.data);
          setPlaces(res.data);
        }),
    []
  );
  const PlaceUpdate = (id) => {
    const newPlace = places.find((place) => place.id === id);
    newPlace.done = !newPlace.done;
    // console.log(id);
    // console.log(newPlace);
    axios
      .put(endpoints.places + id, newPlace, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        // console.log(res);
        const newPlaces = [...places];
        // for (i of newPlaces) {
        //   if (i.id === id) {
        //     i.done = !i.done;
        //     console.log(i.done);
        //   }
        // }
        // newPlaces.map((newwPlace) => {
        //   if (newwPlace.id === id) {
        //     console.log(newwPlace);
        //     newwPlace.done = !newwPlace.done;
        //     console.log(newwPlace);
        //   }
        // });
        console.log(newPlaces);
        setPlaces(newPlaces);
      });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>Not Donee</h1>
        {places
          .filter((place) => !place.done)
          .map((place, id) => (
            <div
              onClick={() => {
                PlaceUpdate(place.id);
              }}
            >
              {place.place}
            </div>
          ))}
      </div>
      <div>
        <h1>Done</h1>
        {places
          .filter((place) => place.done)
          .map((place, id) => (
            <div
              onClick={() => {
                PlaceUpdate(place.id);
              }}
            >
              {place.place}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Bingo;
