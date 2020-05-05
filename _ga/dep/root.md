---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A dummy node “ROOT” is used as the governor. The ROOT node is indexed with “0”, since the indices of real words in the sentence start at 1.

### Example

_Ní <b>thugtar</b> íocaíochtaí mura n-iarrtar iad_ `Payments are not <b>made</b> if they are not requested'

~~~ sdparse
ROOT Ní thugtar íocaíochtaí mura n-iarrtar iad \n ROOT Not given payments if_not requested them 
root(ROOT, thugtar)
~~~

Copular constructions in Irish follow the copula-predicate-subject pattern, wherein the predicate is usually the root (see the example below).

_Is <b>cuntas</b> réasúnta é sa mhórchuid._ `It's a reasonable <b>account</b>, for the most part'

~~~ sdparse
ROOT Is cuntas réasúnta é sa mhórchuid. \n ROOT Is account reasonable it in_the big_part 
root(ROOT, cuntas)
~~~

However, in some copular constructions, the copula and the root may be more distant from one another and separated by an emphatic nominal, as in this case:

_Is í an <b>bhean</b> cruthaitheóir agus cosantóir na beatha._ `The <b>woman</b> is the creator and defender of life.'

~~~ sdparse
ROOT Is í an bhean cruthaitheóir agus cosantóir na beatha. \n ROOT Is her the woman creator and defender of_the life.  
root(ROOT, bhean)
~~~

In copular constructions where the pleonastic conjunction '_ná_' occurs, the subject is fronted and the predicate appears clause-finally introduced by '_ná_'. Therefore, the `root` and the `cop` are located far from one other. 

_Is í an obair a bheadh le déanamh ná 'aghaidh a <b>thabhairt</b> ar pholaitiú agus ar bharbarú an domhain'._ The work that would have to be done would be to <b>address</b> the politicisation and violent nature of the world.

~~~ sdparse
ROOT Is í an obair a bheadh le déanamh ná 'aghaidh a thabhairt</b> ar pholaitiú agus ar bharbarú an domhain'. \n ROOT Is it(fem) the work that would_be to doing [] face to giving on politicising and on violence of_the world.  
root(ROOT, thabhairt)
obj(thabhairt, aghaidh)
cop(thabhairt, Is)
~~~
