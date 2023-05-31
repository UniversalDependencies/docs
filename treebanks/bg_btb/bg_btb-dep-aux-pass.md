---
layout: base
title:  'Statistics of aux:pass in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="bg_btb-dep-aux.html">aux</a></tt>.

930 nodes (1%) are attached to their parents as `aux:pass`.

889 instances of `aux:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09139784946237.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (905; 97% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (25; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Село	село	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	Драгалевци	драгалевци	PROPN	Np-li	Definite=Ind|Number=Ptan	1	nmod	1:nmod	_
3	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	разположено	разположа-(се)	VERB	Vpptcv--sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	R	_	6	case	6:case	_
6	полите	пола	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	4	iobj	4:iobj	_
7	на	на	ADP	R	_	8	case	8:case	_
8	Витоша	витоша	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	6:nmod:на	SpaceAfter=No
9	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Дончо	дончо	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	беше	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
3	дълбоко	дълбоко	ADV	Dm	Degree=Pos	4	advmod	4:advmod	_
4	вдаден	вдам	ADJ	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	R	_	6	case	6:case	_
6	работата	работа	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	4	iobj	4:iobj	_
7	си	свой	PRON	Psxto	Case=Nom|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	6:det	SpaceAfter=No
8	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


