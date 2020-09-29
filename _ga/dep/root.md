---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A dummy node “ROOT” is used as the governor. The ROOT node is indexed with “0”, since the indices of real words in the sentence start at 1.

### Examples

_Ní <b>thugtar</b> íocaíochtaí mura n-iarrtar iad_ `Payments are not <b>made</b> if they are not requested'

~~~ sdparse
ROOT Ní thugtar íocaíochtaí mura n-iarrtar iad \n ROOT Not given payments if_not requested them 
root(ROOT, thugtar)
~~~

#### Copular constructions

Copular constructions in Irish follow the copula-predicate-subject pattern, wherein the predicate is the `root` (see the example below).

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

Where the pleonastic conjunction '_ná_' occurs, the subject is fronted and the predicate appears clause-finally introduced by '_ná_'. This conjunction allows for the re-ordering of the COP-PRED-SUBJ structure. Therefore, the `root` and the `cop` are separated from one other by the subject of the copular phrase. 

_Is í an obair a bheadh le déanamh ná 'aghaidh a <b>thabhairt</b> ar pholaitiú agus ar bharbarú an domhain'._ The work that would have to be done would be to <b>address</b> the politicisation and violent nature of the world.

~~~ sdparse
ROOT Is í an obair a bheadh le déanamh ná 'aghaidh a thabhairt ar pholaitiú agus ar bharbarú an domhain'. \n ROOT Is it(fem) the work that would_be to doing [] face to giving on politicising and on violence of_the world.  
root(ROOT, thabhairt)
obj(thabhairt, 'aghaidh)
cop(thabhairt, Is)
~~~

Contracted copula forms (where the copula and the predicate are combined) are also labelled `root`.

<b>'Sé</b> seo an chéad duine riamh do chonaic na hógaibh go raibh spéaclaí air. '<b>He</b> is the first person the young people had ever seen wearing glasses'

~~~ sdparse
ROOT 'Sé seo an chéad duine riamh do chonaic na hógaibh go raibh spéaclaí air. \n ROOT Is_he this the first person ever that did_see the young_people that were spectacles on_him.  
root(ROOT, 'Sé)
nsubj('Sé, duine)
~~~

#### Demonstrative pronouns

Demonstrative pronouns that predicate copular phrases are also labelled as the `root`.

<b>Seo</b> an fear a chonaic an bád. '<b>This</b> is the man who saw the boat.'
~~~ sdparse
ROOT Seo an fear a chonaic an bád. \n ROOT Is_this the man who did_see the boat.
root(ROOT, Seo)
nsubj(Seo, fear)
acl:relcl(fear, chonaic)
nsubj(chonaic, a)
~~~

<b>Sin</b> an gort a cuireadh an síol ann. '<b>That's</b> the field where the seed was sown.'
~~~ sdparse
ROOT Sin an gort a cuireadh an síol ann . \n ROOT Is_that the field in_which was_put the seed in_it .
root(ROOT, Sin)
nsubj(Sin, gort)
acl:relcl(gort, cuireadh)
obl(cuireadh, a)
obl:prep(cuireadh, ann)
~~~
#### Interrogative pronouns

The interrogative pronoun _cén_ (a contraction of _cad é an_, lit. 'which one') is raised to root-level when it occurs at the beginning of a sentence, as shown below. It is usually followed by a relativised noun, a closed clausal complement (`ccomp`). 

_<b>Cén</b> chaoi a ndéantar measúnú ar obair chliniciúil, shaotharlainne agus phraiticiúil eile?_ `<b>How</b> is the other clinical, laboratory and practical work assessed?

~~~ sdparse
ROOT Cén chaoi a ndéantar measúnú ar obair chliniciúil, shaotharlainne agus phraiticiúil eile ? \n ROOT Which_one way in_which is_done assessment on work clinical, laboratory and practical other ?  
root(ROOT, Cén)
nsubj(Cén, chaoi)
obl(ndéantar, a)
acl:relcl(chaoi, ndéantar)
~~~

_<b>Cén</b> fáth gur thug sí geallúint shoiléir do na tuistí agus ansin gur bhris sí an gheallúint?_ `<b>Why</b> did she make a clear promise to parents only to break it?

~~~ sdparse
ROOT Cén fáth gur thug sí geallúint shoiléir do na tuistí agus ansin gur bhris sí an gheallúint ? \n ROOT Which_one reason that(PAST) gave she promise clear to the parents and then that(PAST) broke she the promise ?   
root(ROOT, Cén)
nsubj(Cén, fáth)
ccomp(fáth, thug)
~~~

It can also be the predicate of a copular phrase. 

_<b>Cén</b> sórt comhairle í?_ `<b>What</b> kind of advice is it?

~~~ sdparse
ROOT Cén sórt comhairle í ? \n ROOT Which kind of_advice it(fem) ? 
root(ROOT, Cén)
nsubj(Cén, sórt)
nmod(sórt, comhairle)
nmod(sórt, í)
~~~

The interrogative pronoun _cé_ (lit. who, whom) is raised to predicate level when followed by a noun.

_<b>Cé</b> leis an teach?_ `Who owns the house?

~~~ sdparse
ROOT Cé leis an teach ? \n ROOT Who with_it the house ?
root(ROOT, Cé)
obl:prep(Cé, leis)
case(teach, an)
nsubj(Cé, teach)
~~~

However, _cé_ is treated as the fronted subject/oblique when followed by a verb. Note that the verb particle '_a_' is labelled `mark:prt`in instances like those shown below.

_Cé a <b>labhair</b>?_ `Who <b>spoke</b>?

~~~ sdparse
ROOT Cé a labhair ? \n ROOT Who with_it the house ?
root(ROOT, labhair)
nsubj(labhair, Cé)
mark:prt(labhair, a)
~~~

_Cé leis a <b>dtiocfaidh</b> a rá go bhfuil…_ `Who can <b>say</b> that...

~~~ sdparse
ROOT Cé leis a dtiocfaidh a rá go bhfuil ? \n ROOT Who with_it [] will_come to say that is ?
root(ROOT, dtiocfaidh)
nsubj(dtiocfaidh, Cé)
obl:prep(Cé, leis)
mark:prt(dtiocfaidh, a)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:36 CEST 2020 -->
