import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  
  const handleUpdate = () => {
    const prev = prompt("who's mentor's name you want to change")
    const current = prompt("what's name you want to change")
    setPerson(person => ({...person, mentors: person.mentors.map(mentor => {
      if (mentor.name === prev) {
        return {...mentor, name: current}
      }
      return mentor;
    })}))
  }

  const handleAdd = () => {
    const name = prompt("who you want it to add");
    const title = prompt("what's title..")
    setPerson(person => ({...person, mentors: [...person.mentors, {name, title}]}))
  }

  const handleDelete = () => {
    const name = prompt("who you want it to delete");
    setPerson(person => ({...person, mentors: person.mentors.filter(mentor => 
      mentor.name !== name
    )}))
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={handleAdd}
      >
        멘토 추가하기
      </button>
      <button
        onClick={handleDelete}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}