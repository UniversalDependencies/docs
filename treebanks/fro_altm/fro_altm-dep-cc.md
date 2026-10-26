---
layout: base
title:  'Statistics of cc in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `cc`

This relation is universal.

772 nodes (5%) are attached to their parents as `cc`.

772 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75388601036269.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (526; 68% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (205; 27% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (15; 2% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (12; 2% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="fro_altm-pos-NUM.html">NUM</a></tt>-<tt><a href="fro_altm-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	et	et	CCONJ	_	_	3	cc	_	prpos=Cc|uppos=CONJO
2	l'	il	PRON	_	PronType=Prs	3	obj	_	prpos=Pp|uppos=PRO
3	amenda	amender	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
4	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Si	si	ADV	_	_	3	advmod	_	prpos=Rg|uppos=ADV
2	m'	je	PRON	_	PronType=Prs	3	obj	_	prpos=Pp|uppos=PRO
3	aït	aider	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	Diex	Dieu	PROPN	_	Number=Sing	3	nsubj	_	prpos=Np|uppos=NPRS
5	et	et	CCONJ	_	_	7	cc	_	prpos=Cc|uppos=CONJO
6	ses	son	DET	_	Poss=Yes	7	det	_	prpos=Ds|uppos=DZ
7	sains	saint	NOUN	_	Number=Plur	4	conj	_	prpos=Nc|uppos=NCPL
8	»	»	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|SpaceAfter=No|uppos=PONFP
9	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	De	de	ADP	_	_	3	case	_	prpos=S|uppos=P
2	ce	ce	DET	_	PronType=Dem	3	det	_	prpos=Dd|uppos=D
3	douaire	douaire	NOUN	_	Number=Sing	9	obl	_	prpos=Nc|uppos=NCS
4	meïsmes	même	ADJ	_	_	3	amod	_	prpos=Ag|uppos=ADJ
5	entre	entre	ADP	_	_	6	case	_	prpos=S|uppos=P
6	vous	vous	PRON	_	PronType=Prs	9	obl	_	prpos=Pp|uppos=PRO
7	et	et	CCONJ	_	_	8	cc	_	prpos=Cc|uppos=CONJO
8	moi	je	PRON	_	PronType=Prs	6	conj	_	prpos=Pp|uppos=PRO
9	sommes	être	VERB	_	Number=Plur|Person=1|VerbForm=Fin	0	root	_	prpos=Vuc|uppos=EJ
10	en	en	ADP	_	_	11	case	_	prpos=S|uppos=P
11	question	question	NOUN	_	Number=Sing	9	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
12	,	,	PUNCT	_	_	9	punct	_	join=left|prpos=Fw|uppos=PON

~~~


