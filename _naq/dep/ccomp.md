---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.

~~~ sdparse
ǂAn ts ge a tare-e ta ra mî sa . \n Know you DECL STAT.PRS what I IPFV say NMLZ .
ccomp(ǂAn, mî)
mark(mî, sa)
ccomp(Know, say)
mark(say, NMLZ)
~~~

If the subject of the clausal complement is obligatory controlled (that is, must be the same as the higher subject or object, with no other possible interpretation) the appropriate relation is [xcomp](naq-dep/xcomp).

~~~ sdparse
ǁîb ge ra mû khao da go sa . \n He DECL IPFV see dig we RPST NMLZ.OBL .
ccomp(mû, khao)
ccomp(see, dig)
~~~

~~~ sdparse
Sada ge ge khao tsoatsoa . \n We DECL PST dig start .
xcomp(tsoatsoa, khao)
xcomp(start, dig)
~~~

The key difference here is that, if a verb takes a whole clause as a compliment (with it's own subject), that this relation is `ccomp`. Whereas `xcomp` can be used only with a small closed group of main verbs that take as compliment a single verb (e.g., _tsoatsoa_ "start", _ǂgao_ "want").

### Reported Speech

With a speech verb like _mî_ "say", the content of reported speech is considered to be part of the verb’s valency. It therefore always attaches as `ccomp`, including direct and indirect speech:

~~~ sdparse
ǁKhore ta ge ra khoena " ǀû re " ti mî ǀû ǃkhaisa . \n Wish I DECL IPFV people " stop PDIR " QUOT say stop COMPL .
ccomp(mî, ǀû)
ccomp(say, stop)
~~~

~~~ sdparse
ǀOwesa ta a ti n ge ra mî . \n Lazy I am QUOT they DECL IPFV say .
ccomp(mî, ǀOwesa)
ccomp(say, Lazy)
~~~

~~~ sdparse
Sats ra mî sa ǃoa " Ti koro khoega ge ǂgâu " . \n You IPFV say NMLZ.OBL according_to " My five guys PST hit " .
ccomp(mî, ǂgâu)
ccomp(say, hit)
~~~

Quoted content is considered to be `ccomp` even if it is a sentence fragment:

~~~ sdparse
" Hî-î " ti ts ra mî ? \n " No " QUOT you IPFV say ?
ccomp(mî, Hî-î)
ccomp(say, No)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:07 CEST -->
