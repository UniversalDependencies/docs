---
layout: base
title:  'Statistics of punct in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `punct`

This relation is universal.

10369 nodes (11%) are attached to their parents as `punct`.

8264 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.24688976757643.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (5896; 57% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (2961; 29% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (932; 9% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (267; 3% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (131; 1% instances), <tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (83; 1% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (69; 1% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-DET.html">DET</a></tt>-<tt><a href="sv_talbanken-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 punct	color:blue
1	'	'	PUNCT	PAD	_	4	punct	4:punct	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	4:nsubj	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	din	du	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	4:punct	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	7:dislocated	_
2	att	att	PART	IE	_	3	mark	3:mark	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	1:acl:att	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	3:obj	_
5	-	-	PUNCT	MID	_	1	punct	1:punct	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	7:nsubj|8:nsubj	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
9	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
2	i	i	ADP	PP	_	3	case	3:case	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	1:obl:i	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	3:nmod	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	4:punct	_
6	Vol.	Vol.	NOUN	NN|AN	Abbr=Yes	7	nmod	7:nmod	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	4:obl	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	7:punct	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	7:nummod	_
10	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


