---
layout: relation
title: 'dep'
shortdef: '<shortdef>'
udver: '2'
---

Unspecified dependency appears frequently in the MPCD corpus for:
1. non-tokens, which are usually errors in the manuscript;
2. tokens that are not understood and whose position in the clause cannot be determined;
3. orphaned tokens due to loss of text, i.e. the relation of tokens cannot be determined because part of the clause is missing;
4. inserted tokens by editors, which actually do not occur in the manuscript and can therefor not be used to prove anything.

(1) misspelling lkyn in the manuscript for lʿyn (i.e. *pēš*).

- "to the presence of Yōšt"
~~~ sdparse
tā lkyn pēš yōšt \n up_to ERROR front Yōšt
case(pēš, tā)
dep(pēš, lkyn)
nmod(pēš, yōšt)
~~~

(2-3) unclear token pʾʾʾhlyht and text loss, which results in unclear dependency of the final legible words

- "What (is) a good deed? From ...(?) group moderation contentment?"
~~~ sdparse
kirbag čē az pʾʾʾhlyht LOSS dastag paymān hunsandīh \n good_deed what from UNCLEAR GAP group moderation contentment
nsubj(čē, kirbag)
case(pʾʾʾhlyht, az)
dep(čē, pʾʾʾhlyht)
dep(čē, LOSS)
dep(čē, dastag)
dep(čē, paymān)
dep(čē, hunsandīh)
~~~

(4) inserted token ī by editor, which clarifies that the following noun cannot be the subject of this clause

- "if (she) has been given into the guardianship (of) the brother"
~~~ sdparse
ka pad sālārīh ī brād bē dād ēstēd \n if in guardianship INSERTED brother off given stands
mark(dād, ka)
case(sālārīh, pad)
obl(dād, sālārīh)
dep(brād, ī)
nmod(sālārīh, brād)
advmod(dād, bē)
aux(dād, ēstēd)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:58 CEST -->
