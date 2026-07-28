---
layout: relation
title: 'xcomp'
shortdef: '<shortdef>'
udver: '2'
---

An open clausal complement of a [verb]() or an [adjective](ADJ) is (i) a core argument of the verb, (ii) which is without its own subject and (iii) for which the reference of the subject is necessarily determined by an argument external to the `xcomp`. This relation is typical for modal verbs: 'for someone it is necessary to do something' i.e. 'someone must do something', or verbs like 'to make' or 'to become'.

- "Which one appears more useful to you."
~~~ sdparse
kadār =tān sūdōmandtar sahēd \n which you.PL.OBL more_useful seems
nsubj(sahēd, kadār)
xcomp(sahēd, sūdōmandtar)
obl(sahēd, =tān)
~~~

- "Then (it) seemed more sensible to me to separate and sort the questions topic by topic."
~~~ sdparse
ēg =im pursišn dar dar ǰudāg ud wizihāgīhātar kirdan čimīgtar sahist \n then me question topic topic separate and more_assortedly making more_reasonable seemed
nsubj(sahist, =im)
xcomp(sahist, čimīgtar)
xcomp(čimīgtar, kirdan)
xcomp(kirdan, ǰudāg)
conj(ǰudāg, wizihāgīhātar)
cc(wizihāgīhātar, ud)
compound:redup(dar-4, dar-5)
obl(kirdan, dar-4)
advmod(sahist, ēg)
~~~

- "A woman (is not allowed) not to take a husband and a man is not allowed not to take a wife." (omitted word in parantheses)
~~~ sdparse
zan šōy nē kirdan ud mard zan nē kirdan nē pāduxšāy \n woman husband not make and man woman not make not authorised
cc(pāduxšāy, ud)
nsubj(pāduxšāy, mard)
xcomp(pāduxšāy, kirdan-9)
advmod(pāduxšāy, nē-10)
obj(kirdan-9, zan-7)
advmod(kirdan-9, nē-8)
obj(kirdan-4, šōy)
advmod(kirdan-4, nē-3)
~~~

- "(It) cannot be otherwise!"
~~~ sdparse
ǰuttar nē šāyēd būd \n different not is_possible be
xcomp(šāyēd, ǰuttar)
advmod(šāyēd, nē)
cop(ǰuttar, būd)
~~~

- "For how long should (you) not drink water?"
~~~ sdparse
tā čand āb nē abāyēd xwardan \n until how_much water not must drink
obj(xwardan, āb)
advmod(abāyēd, nē)
xcomp(abāyēd, xwardan)
~~~

- "And (he) has to be without doubt about this that the gods give goodness to humans."
~~~ sdparse
ud pad ēn abēgumān būd kū yazdān ō mardōmān nēkīh dahēnd \n and in this doubtless be.NEC that gods to humans goodness give.3PL
cc(abēgumān, ud)
case(ēd, pad)
obl(abēgumān, ēd)
cop(abēgumān, būd)
xcomp(abēgumān, dahēnd
mark(dahēnd, kū)
~~~




<!-- Interlanguage links updated Út 30. června 2026, 11:00:45 CEST -->
