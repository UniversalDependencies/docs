---
layout: base
title:  'Statistics of nsubj:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ca_ancora-dep-nsubj-outer.html">nsubj:outer</a></tt>.

597 nodes (0%) are attached to their parents as `nsubj:pass`.

565 instances of `nsubj:pass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.0820770519263.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (351; 59% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (157; 26% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (74; 12% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (9; 2% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	L'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No|Entity=(CESSCATAAP1998110235c3--2-CorefType:ident,gstype:gen
2	atac	atac	NOUN	ncms000	Gender=Masc|Number=Sing	6	nsubj:pass	6:nsubj:pass	ArgTem=arg1:pat|Entity=CESSCATAAP1998110235c3)
3	també	també	ADV	rg	_	6	advmod	6:advmod	_
4	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
5	ser	ser	AUX	vsn0000	VerbForm=Inf	6	aux:pass	6:aux:pass	_
6	condemnat	condemnar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
7	per	per	ADP	spcms	_	9	case	9:case	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	PP	PP	PROPN	np0000o	_	6	obl:agent	6:obl:agent	SpaceAfter=No|ArgTem=arg0:agt|Entity=(CESSCATAAP1998110235c12-organization-1-CorefType:ident,gstype:spec)
10	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Ell	ell	PRON	pp3ms000	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	7:nsubj:pass	SpaceAfter=No|ArgTem=arg1:pat|Entity=(CESSCATAAP200111015c1-other-1-CorefType:ident,gstype:spec
2	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
3	extraordinari	extraordinari	ADJ	aq0ms0	Gender=Masc|Number=Sing	1	amod	1:amod	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	Entity=CESSCATAAP200111015c1)
5	potser	potser	ADV	rg	_	7	advmod	7:advmod	_
6	serà	ser	AUX	vsif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	indultat	indultar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
8	com	com	SCONJ	cs	_	10	mark	10:mark	_
9	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	10	det	10:det	Entity=(NOCOREF:Gen--2-gstype:gen
10	ninot	ninot	NOUN	ncms000	Gender=Masc|Number=Sing	7	obj	7:obj	SpaceAfter=No|ArgTem=argM:atr|Entity=NOCOREF:Gen)
11	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Auger	Auger	PROPN	np0000p	_	3	nsubj:pass	3:nsubj:pass	ArgTem=arg1:pat|Entity=(CESSCATAAP2002040283c1-person-1-CorefType:ident,gstype:spec)
2	serà	ser	AUX	vsif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	enterrat	enterrar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
4	demà	demà	ADV	rg	_	3	advmod	3:advmod	ArgTem=argM:tmp
5	a	a	ADP	spcms	_	7	case	7:case	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
7	migdia	migdia	NOUN	ncms000	Gender=Masc|Number=Sing	3	obl	3:obl	SpaceAfter=No|ArgTem=argM:tmp|Entity=(NOCOREF:Gen--1-gstype:gen)
8	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


