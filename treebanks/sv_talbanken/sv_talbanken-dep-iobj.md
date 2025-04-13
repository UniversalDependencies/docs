---
layout: base
title:  'Statistics of iobj in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `iobj`

This relation is universal.

163 nodes (0%) are attached to their parents as `iobj`.

162 instances of `iobj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36196319018405.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (106; 65% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (50; 31% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	fråga	fråga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
4	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	3	iobj	3:iobj	_
5	hur	hur	ADV	HA	_	8	advmod	8:advmod	CxnElt=8:Interrogative-WHInfo-Indirect.WHWord
6	dessa	denna	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Dem	7	det	7:det	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nsubj	8:nsubj	_
8	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	Cxn=Interrogative-WHInfo-Indirect|CxnElt=8:Interrogative-WHInfo-Indirect.Clause|SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Giftermålsbalken	giftermålsbalk	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	ger	ge	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	makarna	make	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	iobj	2:iobj	_
4	formell	formell	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	5:amod	_
5	likställighet	likställighet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
6	i	i	ADP	PP	_	7	case	7:case	_
7	äktenskapet	äktenskap	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	5:nmod:i	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 iobj	color:blue
1	Lite	lite	ADV	AB|POS	Degree=Pos	2	advmod	2:advmod	_
2	senare	sen	ADV	AB|KOM	Degree=Cmp	5	advmod	5:advmod	_
3	i	i	ADP	PP	_	4	case	4:case	_
4	livet	liv	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	obl	2:obl:i	_
5	använder	använda	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	5	nsubj	5:nsubj	_
7	39000	39000	NUM	RG|NOM	Case=Nom|NumType=Card	8	nummod	8:nummod	_
8	kronor	krona	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obj	5:obj	_
9	för	för	ADP	PP	_	11	mark	11:mark	_
10	att	att	PART	IE	_	11	mark	11:mark	_
11	lära	lära	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	5	advcl	5:advcl:att	_
12	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	13	det	13:det	_
13	värnpliktige	värnpliktig	ADJ	JJ|POS|MAS|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Gender=Com|Number=Sing	11	iobj	11:iobj	_
14	skjuta	skjuta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	SpaceAfter=No
15	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


