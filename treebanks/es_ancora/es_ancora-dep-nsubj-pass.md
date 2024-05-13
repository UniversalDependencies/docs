---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_ancora-dep-nsubj-outer.html">nsubj:outer</a></tt>.

61 nodes (0%) are attached to their parents as `nsubj:pass`.

40 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.52459016393443.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (39; 64% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (12; 20% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (6; 10% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


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
6	heridos	herido	NOUN	ncmp000	Gender=Masc|Number=Plur	4	obl	4:obl	SpaceAfter=No|ArgTem=argM:mnr|Entity=(NOCOREF:Gen--1-gstype:gen)
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:pass	color:blue
1	Tampoco	tampoco	ADV	rg	_	2	advmod	2:advmod	_
2	quiso	querer	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	revelar	revelar	VERB	vmn0000	VerbForm=Inf	2	xcomp	2:xcomp	ArgTem=arg1:pat
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
5	nombres	nombre	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	3:obj	ArgTem=arg1:pat
6	de	de	ADP	sps00	_	8	case	8:case	_
7	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	8:det	Entity=(CESSCASTP2001080246c18--2-gstype:gen,HomoDD
8	empresas	empresa	NOUN	ncfp000	Gender=Fem|Number=Plur	5	nmod	5:nmod	_
9	que	que	PRON	pr0cn000	PronType=Rel	12	nsubj:pass	12:nsubj:pass	ArgTem=arg1:pat|Entity=(CESSCASTP2001080246c18--1-CorefType:ident,gstype:gen)
10	están	estar	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	12:aux	_
11	siendo	ser	AUX	vsg0000	VerbForm=Ger	12	aux:pass	12:aux:pass	_
12	investigadas	investigar	VERB	vmp00pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	acl	8:acl	SpaceAfter=No|Entity=CESSCASTP2001080246c18)NOCOREF:Gen)
13	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	el	DET	dd0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTAA200002065003c45--2-CorefType:ident,Title
2	REAL	real	PROPN	np00000	_	6	nsubj:pass	6:nsubj:pass	MWE=REAL_SOCIEDAD|MWEPOS=PROPN|ArgTem=arg0:agt
3	SOCIEDAD	sociedad	PROPN	_	_	2	flat	2:flat	Entity=CESSCASTAA200002065003c45)
4	NO	no	ADV	rn	Polarity=Neg	6	advmod	6:advmod	_
5	SE	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	obj	6:obj	_
6	ALEJA	aleja	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	DE	de	ADP	spcms	_	9	case	9:case	_
8	EL	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	PRECIPICIO	precipicio	NOUN	ncms000	Gender=Masc|Number=Sing	6	obl	6:obl	ArgTem=arg2:loc|Entity=(CESSCASTAA200002065003c46--1-Title)

~~~


