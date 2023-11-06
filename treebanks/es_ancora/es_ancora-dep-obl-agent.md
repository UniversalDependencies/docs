---
layout: base
title:  'Statistics of obl:agent in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="es_ancora-dep-obl-arg.html">obl:arg</a></tt>.

1283 nodes (0%) are attached to their parents as `obl:agent`.

1281 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48947778643804.

The following 12 pairs of parts of speech are connected with `obl:agent`: <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (582; 45% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (370; 29% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (213; 17% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (75; 6% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 obl:agent	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP19991201135_cc1-other-2-gstype:spec
2	película	película	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obj	8:obj	_
3	'	'	PUNCT	fz	PunctType=Quot	5	punct	5:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.other-other-3-gstype:spec
4	La	el	DET	np00000	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	MWE=La_humanidad|MWEPOS=PROPN
5	humanidad	humanidad	NOUN	_	Gender=Fem|Number=Sing	2	appos	2:appos	SpaceAfter=No
6	'	'	PUNCT	fz	PunctType=Quot	5	punct	5:punct	SpaceAfter=No|Entity=NOCOREF:Spec.other)CESSCASTP19991201135_cc1)
7	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
8	retirada	retirado	ADJ	aq0fsp	Gender=Fem|Number=Sing|VerbForm=Part	0	root	0:root	_
9	en	en	ADP	sps00	_	10	case	10:case	_
10	Italia	Italia	PROPN	np00000	_	8	obl	8:obl	ArgTem=argM:loc|Entity=(NOCOREF:Spec.location-place-1-gstype:spec)
11	por	por	ADP	sps00	_	13	case	13:case	_
12	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	13:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
13	censura	censura	NOUN	ncfs000	Gender=Fem|Number=Sing	8	obl:agent	8:obl:agent	SpaceAfter=No|ArgTem=arg0:agt|Entity=NOCOREF:Gen)
14	.	.	PUNCT	fp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Todo	todo	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Tot	2	det	2:det	Entity=(CESSCASTP1999090211c32--2-CorefType:dx.token
2	ello	él	PRON	pp3ns000	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	ArgTem=arg1:tem|Entity=CESSCASTP1999090211c32)
3	era	ser	AUX	vsii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	5:cop	_
4	perfectamente	perfectamente	ADV	rg	_	5	advmod	5:advmod	_
5	conocido	conocido	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
6	por	por	ADP	sps00	_	7	case	7:case	_
7	Occidente	Occidente	PROPN	np00000	_	5	obl:agent	5:obl:agent	SpaceAfter=No|ArgTem=arg0:agt|Entity=(CESSCASTP1999090211c6-organization-1-CorefType:ident,gstype:spec)
8	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	Entity=(CESSCASTP19990302141c5--2-CorefType:ident,gstype:gen
2	operación	operación	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:pat|Entity=CESSCASTP19990302141c5)
3	fue	ser	AUX	vsis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	4:aux	_
4	realizada	realizar	VERB	vmp00sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	por	por	ADP	sps00	_	7	case	7:case	_
6	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Entity=(NOCOREF:Gen--2-gstype:gen
7	experto	experto	NOUN	ncms000	Gender=Masc|Number=Sing	4	obl:agent	4:obl:agent	ArgTem=arg0:agt
8	leridano	leridano	ADJ	aq0ms0	Gender=Masc|Number=Sing	7	amod	7:amod	SpaceAfter=No|Entity=NOCOREF:Gen)
9	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


