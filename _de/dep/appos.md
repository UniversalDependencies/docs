---
udver: '2'
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

`appos` marks nominal appositions to noun phrases. This includes parenthesized noun phrases and abbreviations that specify the modified noun. Both the apposition and the noun phrase have to be full noun phrases.

~~~ sdparse
Die neue Senatorin für Stadtentwicklung , Traute Müller , tritt heute ihren Dienst an . \n The new senator for city development , Traute Müller , assumes her office today . 
appos(Senatorin, Traute)
flat(Traute, Müller)
~~~

~~~ sdparse
das Niedersächsische Landeskriminalamt ( LKA ) \n the Lower-Saxonian state police office ( LKA ) 
appos(Landeskriminalamt, LKA)
~~~

~~~ sdparse
Der Begriff " Wende " steht für ... \n The term " Wende " stands for ...
appos(Begriff, Wende)
~~~

~~~ sdparse
Die Lehmbausiedlungen , die so genannten Pueblos \n The mud settlements, the so called pueblos
appos(Lehmbausiedlungen, Pueblos)
~~~

