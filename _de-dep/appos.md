---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

`appos` marks nominal appositions to noun phrases. This includes parenthesized noun phrases and abbreviations that specify the modified noun.

~~~ sdparse
Die neue Senatorin für Stadtentwicklung , Traute Müller , tritt heute ihren Dienst an . \n The new senator for city development , Traute Müller , assumes her office today . 
appos(Senatorin, Traute)
name(Traute, Müller)
~~~

~~~ sdparse
das Niedersächsische Landeskriminalamt ( LKA ) \n the Lower-Saxonian state police office ( LKA ) 
appos(Landeskriminalamt, LKA)
~~~

