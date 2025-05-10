---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation in Scottish Gaelic is used to attach prepositions to the words they qualify.
These are in turn related to their heads with:
* the [nmod]() relation, if their head is a nominal
* [xcomp:pred]() if it is the predicate of _bi_
* [csubj:cleft]() if it is a cleft
* [obl]() if it is another sort of clause or complement.

There is a small set of simple prepositions (English translations very approximate):
* _à_ 'out of'
* _aig_ 'at'
* _air_ 'on',
* _an_, 'in'. Usually in modern Gaelic this is _ann an_ for indefinite nominals or _anns an_ for definite nominals.
* _bho_/_o_ 'from',
* _de_ 'of',
* _do_ 'for',
* _eadar_ 'between'
* _fo_ 'under',
* _gu_ 'to',
* _gun_ 'without',
* _le_ 'with',
* _mu_ 'about'
* _os_ 'above'
* _ri_ 'to, against'
* _ro_ 'before'
* _tro_ 'through'

and the aspectual marker _ag_.

There is a large class of compound prepositions which consist of a preposition plus a noun.
The nominal the compound preposition marks is then typically in the genitive.

* _an dèidh_ 'after'
* _os cionn_ 'above'
* _o chionn_ 'since'
* _ri linn_ 'in the time of', 'because of'

Some of these are treated as fixed expressions.
See [fixed]() for a full list of those to be found in the ARCOSG corpus.

There is more discussion at https://leacan.gla.ac.uk/leacan/index.php?xx=prepositions/prepositions

See also [case:voc]() for the vocative particle _a_.

### Examples

#### Marking a nominal

_Air an là mu dheireadh_ 'on the last day' (pw10\_037, train)

~~~ sdparse
Air an là mu dheireadh \n on the day about end
case(Air,là)
det(an,là)
amod(mu,là)
fixed(dheireadh,mu)
~~~

#### Marking a pronoun

_cha tàinig e faisg <b>oirnn</b> is eh_ 'he did not come close <b>to</b> us and eh' (p01\_008b, train)

~~~ conllu
1	cha	cha	PART	Qn	PartType=Vb|Polarity=Neg	2	mark:prt	_	_
2	tàinig	thig	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	faisg	faisg	ADJ	Ap	_	2	xcomp:pred	_	_
5-6	oirnn	_	_	_	_	_	_	_	_
5	air	air	ADP	Sp	_	6	case	_	_
6	sinn	sinn	PRON	Pp1p	Number=Plur|Person=1|PronType=Prs	2	obl	_	_
7	is	is	CCONJ	Cc	_	8	cc	_	_
8	eh	eh	INTJ	I	_	2	conj	_	_
~~~

_chan urrainn <b>dhomh</b> sin a fhreagairt_ '<b>I</b> can't answer that' (p07\_003, train)

~~~ sdparse
chan urrainn dhomh sin a fhreagairt \n NEG-COP possibility to me that PART answer
cop(chan, urrainn)
nmod(dhomh, urrainn)
~~~

#### Marking a verbal noun

_gu bhith a' riaghladh an dèidh an ath thaghaidh_ 'to be governing after the next election' (pw10\_037, train)

~~~ sdparse
gu bhith a' riaghladh an dèidh an ath thaghaidh \n to be ASP governing in after the next election
case(a', riaghladh)
xcomp:pred(riaghladh, bhith)
case(gu, bhith)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:04 CEST -->
