---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark a dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee’s name to its host sentence. Discourse markers in Irish usually precede lenited personal names or titles.  

### Examples:

_Slán leat, a <b>Mhichíl</b> ghrinn._ `Goodbye , my funny <b>Michael</b>.'

~~~ sdparse
Slán leat, a Mhichíl ghrinn. \n Goodbye with_you, my Michael funny.
vocative(Slán, Mhichíl)
~~~

_Is dóigh liom a <b>Mháiréad</b>, go bhfuil mé i ngrá leat_  `I think <b>Mairead</b>, that I'm in love with you'

~~~ sdparse
Is dóigh liom a Mháiréad , go bhfuil mé i ngrá leat \n Is belief with_me [] Mairead , that am I in love with_you
vocative(dóigh, Mháiréad)
~~~

_'Tá eagla orm, a <b>fheara</b>,' arsa Fionn, 'go mbeidh an ceo so an-dhorcha'._ 'I'm afraid, my <b>man</b>,' said Fionn, 'that this fog will be very dark'.

~~~ sdparse
'Tá eagla orm, a fheara ,' arsa Fionn, 'go mbeidh an ceo so an-dhorcha'. \n 'Is fear on_me, my man,' said Fionn, 'that will_be the fog this the-dark'.
vocative(arsa, fheara)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:22 CEST 2021 -->
