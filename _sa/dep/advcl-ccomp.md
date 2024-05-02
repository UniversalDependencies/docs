---
layout: relation
title: 'advcl:ccomp'
shortdef: 'adverbial clausal modifier with elided speech verb'
udver: '2'
---

This sublabel is designed for phrases of direct speech or thought marked by the quotative particle *iti* that are directly attached to a verb expressing an outward action. It is assumed that in such cases a speech verb (or verb of thinking) underwent elision so that the *iti* phrase represents an adverbial clause modifying the main action in such a way that it is done "while saying (or thinking)" some specific thing (typically, a mantra).

May he sacrifice from the food (reciting the mantra) 'O lord of food (etc.)' (Vārāhagṛhyasūtra 1.33).
~~~ sdparse
anna pate iti annasya juhuyāt \n of-food o-lord PTCL from-food may-he-sacrifice

advcl:ccomp(juhuyāt, anna)
flat(anna, pate)
mark(iti, pate)
obj(annasya, juhuyāt)
~~~