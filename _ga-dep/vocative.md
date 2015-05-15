---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---

The `vocative` relation is used to mark a dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee’s name to its host sentence.

### Examples:

_Slán leat , a <b>chara</b>_ `Goodbye , <b>friend</b>'

~~~ sdparse
Slán leat , a chara \n Goodbye with_you, [] friend
vocative(Slán, chara)
~~~

_Is dóigh liom a <b>Mháiréad</b>, go bhfuil mé i ngrá leat_  `I think <b>Mairead</b>, that I'm in love with you'

~~~ sdparse
Is dóigh liom a Mháiréad , go bhfuil mé i ngrá leat \n Is belief with_me [] Mairead , that am I in love with_you
vocative(dóigh, Mháiréad)
~~~
