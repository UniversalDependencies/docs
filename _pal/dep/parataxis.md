---
layout: relation
title: 'parataxis'
shortdef: '<shortdef>'
udver: '2'
---

The parataxis relation links two elements that are linked without any explicit co- or subordination. It is not always clear whether to assume coordination, parataxis, or two consecutive sentences. As many clauses are introduced by *ud* 'and' in the Middle Persian corpus, the presence of this junctor is not clear evidence for coordination, and "run-on sentences" or pairing "with non-conjunction connectives" figure in our data only rarely. <br>Parataxis is used when assuming two independent sentences is not felicitous.


- "And he, Gayōmart, said: Now that the Adversary has come, humans will emerge from my seed. For a matter of fact, this (is) good if acts virtuously."
~~~ sdparse
u =š guft gayōmart kū nūn ka ēbgat mad mardōm az tōhmag ī man bawēnd tis =ēw ēn weh ka kār ud kirbag kunēd \n and him said Gayōmart that now when adversary came human from seed EZ I become.3PL thing one this better when task and good_deed does
advmod(bawēnd, nūn)
advcl(bawēnd, mad)
mark(mad, ka-7)
mark(bawēnd, kū)
ccomp(guft, bawēnd)
dislocated:topic(weh, tis)
nsubj(weh, ēn)
mark(kunēd, ka-20)
advcl(weh, kunēd)
parataxis(bawēnd, weh)
~~~

- "And in hell, every demon's running (is) forward; and for the demon of slander, (it is) backwards running due to (his) grave sinfulness."
~~~ sdparse
ud andar dušox harw druz dwārišn ō pēš ud druz ī spazgīh garānwināhīh rāy dwārišn ī ō pas \n and in hell every demon running to front and demon EZ slander grave_sinfulness for running EZ to back
cc(pēš, ud-1)
case(pēš, ō-7)
nsubj(pēš, dwārišn-6)
case(dušox, andar)
obl:lmod(pēš, dušox)
det(druz-5, harw)
nmod(dwārišn-6, druz-5)
cc(dwārišn-15, ud-9)
parataxis(pēš, dwārišn-15)
obl(dwārišn-15, druz-10)
nmod(druz-10, spazgīh)
det(spazgīh, ī-11)
obl(dwārišn-15, garānwināhīh)
case(garānwināhīh, rāy)
det(pas, ī-16)
case(pas, ō-17)
advmod(dwārišn-15, pas)
~~~

The complement clause is sometimes interrupted by the speech verb. Contrary to the regular UD procedure, this is not annotated as a parataxis relation because the complement clause is still marked as subordinated by the subjunctor kū.

- "If two men jointly sell an object to a man (...), Wahrām said that (the vendee) is authorised to request the guarantee from whomever he wishes."
~~~ sdparse
ka mard dō āgenēn xwāstag ēw ō mard ēw frōšēnd wahrām guft kū druyistdārišnīh az harw kē kāmēd xwāst pādixšāy \n if man two together object one to man one sell.3pl Wahrām said that guarantee from every who wishes request authorised
mark(frōšēnd, ka)
advcl(pādixšāy, frōšēnd)
mark(pādixšāy, kū)
ccomp(guft, pādixšāy)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:39 CEST -->
