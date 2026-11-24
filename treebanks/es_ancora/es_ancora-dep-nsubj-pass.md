---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_ancora-dep-nsubj-outer.html">nsubj:outer</a></tt>.

750 nodes (0%) are attached to their parents as `nsubj:pass`.

692 instances of `nsubj:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.15066666666667.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (473; 63% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (174; 23% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (83; 11% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP1999090238_dc2--2-CorefType:ident,gstype:gen
2	accidente	accidente	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	ArgTem=arg1:tem|Entity=CESSCASTP1999090238_dc2)
3	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	saldó	saldar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	sin	sin	ADP	sps00	_	6	case	6:case	_
6	heridos	herido	NOUN	ncmp000	Gender=Masc|Number=Plur	4	obl	4:obl	ArgTem=argM:mnr|Entity=(NOCOREF:Gen--1-gstype:gen)|SpaceAfter=No
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Todos	todo	PRON	pi0mp000	Gender=Masc|Number=Plur|PronType=Tot	3	nsubj:pass	3:nsubj:pass	ArgTem=arg1:pat|Entity=(CESSCASTP2001050169c11_PLUS_CESSCASTP2001050169c17--1-CorefType:ident,gstype:gen)|SplitAnte=CESSCASTP2001050169c11<CESSCASTP2001050169c11_PLUS_CESSCASTP2001050169c17,CESSCASTP2001050169c17<CESSCASTP2001050169c11_PLUS_CESSCASTP2001050169c17
2	fueron	ser	AUX	vsis3p0	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	dados	dar	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	0:root	_
4	de	de	ADP	rg	ExtPos=ADV	3	advmod	3:advmod	ArgTem=argL:|MWE=de_alta|MWEPOS=ADV
5	alta	alta	NOUN	_	_	4	fixed	4:fixed	_
6	poco	poco	PRON	pi0ms000	Gender=Masc|Number=Sing|NumType=Card|PronType=Ind	7	nmod	7:nmod	_
7	después	después	ADV	rg	_	3	advmod	3:advmod	ArgTem=argM:tmp|SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	el	DET	dd0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTAA200002065003c45--2-CorefType:ident,Title
2	REAL	real	PROPN	np00000	_	6	nsubj:pass	6:nsubj:pass	ArgTem=arg0:agt|MWE=REAL_SOCIEDAD|MWEPOS=PROPN
3	SOCIEDAD	sociedad	PROPN	_	_	2	flat	2:flat	Entity=CESSCASTAA200002065003c45)
4	NO	no	ADV	rn	Polarity=Neg	6	advmod	6:advmod	_
5	SE	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	obj	6:obj	_
6	ALEJA	alejar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	DE	de	ADP	spcms	_	9	case	9:case	_
8	EL	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	PRECIPICIO	precipicio	NOUN	ncms000	Gender=Masc|Number=Sing	6	obl	6:obl	ArgTem=arg2:loc|Entity=(CESSCASTAA200002065003c46--1-Title)

~~~


