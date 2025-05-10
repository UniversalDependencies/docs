---
layout: relation
title: 'flat:goeswith'
shortdef: 'flat between syllables'
udver: '2'
---

This relation links two parts of a word that are separated in text by dash or other punctuation marks and usually refer to reading by syllables.
In UD v.2 one cannot use the `goeswith` relation in this case because such words are well edited, in a sense, and there is a token between the first and the second part (punctuation mark).  
The head is always the first part, the other parts are attached to it with the `flat:goeswith` relation
(for consistency, similarly as in [flat](), [fixed](), [goeswith]() and [conj]()).

~~~ sdparse
По - до - жди !
flat:goeswith(до, По)
flat:goeswith(жди, По)
~~~

~~~ sdparse
Гипо … гликемический
flat:goeswith(гликемический, Гипо)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:34 CEST -->
