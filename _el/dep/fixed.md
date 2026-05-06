---
layout: relation
title: 'fixed'
shortdef: 'multi-word expression'
udver: '2'
---

For examples of fixed multiword expressions, see [case]() and [mark]().
These expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the relation [fixed]().

Adverbs
- Fixed multiword adverbs involving reduplication, e.g. such as *τσίμα τσίμα*, *ίσα ίσα*, *στο τσακ*, *στο παρατσάκ* 'tightly'. Notice that reduplication is productive in Modern Greek; the results of productive reduplication are tagged as [compound]().

~~~ sdparse
τσίμα τσίμα
fixed(τσίμα -1-, τσίμα -2-)
~~~

- Other forms, e.g. *καλού-κακού* Lit. *of good-of bad* 'just to make sure'

~~~ sdparse
καλού-κακού
fixed(καλού -1-, - -2-)
fixed(καλού -1-, κακού -3-)
~~~

~~~ sdparse
σ το τσακ
fixed(σ -1-, το -2-)
fixed(σ -1-, τσακ -3-)
~~~

~~~ sdparse
Πρέπει να είμαστε απολύτως σαφείς ως προς αυτό . \n We need to be absolutely clear on this.
fixed(ως, προς)
case(αυτό, ως)
~~~

---------------------
**Cretan**

-έτσι που (ExtPos=SCONJ), "so that"

e.g., *Μόνο, άνε θες, να πάρεις φαμέγιο το Μιχαλιό μου, έτσι.ADV που.SCONJ να σε ξεμιστεύγει ο Θιος.*
"Only, if you wish, take my Michalis as a famégio (a traditional Cretan live-in servant/apprentice paid in food and lodging), so that God will bless you."

~~~ sdparse
Μόνο, άνε θες, να πάρεις φαμέγιο το Μιχαλιό μου, έτσι που να σε ξεμιστεύγει ο Θιος.
mark(ξεμιστεύγει, έτσι)
fixed(έτσι, που)
~~~

-μια ολιά (ExtPos=ADV), "a little"
-εδά και χρόνια (ExtPos=ADV), "for many years"
-τάδε που λοιπόν (ExtPos=INTJ), "so, you know"


----------------------

<!-- Interlanguage links updated St 6. května 2026, 20:46:53 CEST -->
