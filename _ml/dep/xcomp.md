---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
അവൻ പുകവലി ഉം മദ്യപാനം ഉം നിർത്താൻ ശ്രമിച്ചു . \n He smoking-and drinking-and to-stop tried .
nsubj(ശ്രമിച്ചു, അവൻ)
obj(നിർത്താൻ, പുകവലി)
cc(പുകവലി, ഉം)
conj(പുകവലി, മദ്യപാനം)
cc(മദ്യപാനം, ഉം)
xcomp(ശ്രമിച്ചു, നിർത്താൻ)
xcomp(tried, to-stop)
punct(ശ്രമിച്ചു, .)
~~~

~~~ sdparse
ധാരാളം ബി വിറ്റാമിനുകളെ ശരീരത്തിന് നൽകാൻ ബിയറിന് സാധിക്കുന്നു . \n Many B vitamins to-the-body to-provide Beer can .
det(വിറ്റാമിനുകളെ, ധാരാളം)
nmod(വിറ്റാമിനുകളെ, ബി)
obj(നൽകാൻ, വിറ്റാമിനുകളെ)
iobj(നൽകാൻ, ശരീരത്തിന്)
xcomp(സാധിക്കുന്നു, നൽകാൻ)
xcomp(can, to-provide)
nsubj(സാധിക്കുന്നു, ബിയറിന്)
punct(സാധിക്കുന്നു, .)
~~~

<!-- Interlanguage links updated Út 9. května 2023, 20:04:34 CEST -->
