---
layout: base
title:  'Statistics of nsubj:pass in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="bg-dep-nsubj.html">nsubj</a></tt>.

1435 nodes (1%) are attached to their parents as `nsubj:pass`.

920 instances of `nsubj:pass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2411149825784.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (1113; 78% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (184; 13% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (75; 5% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-DET.html">DET</a></tt> (14; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Село	село	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj:pass	_	_
2	Драгалевци	драгалевци	PROPN	Np-li	Definite=Ind|Number=Ptan	1	nmod	_	_
3	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
4	разположено	разположа-(се)	VERB	Vpptcv--sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	в	в	ADP	R	_	6	case	_	_
6	полите	пола	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	4	iobj	_	_
7	на	на	ADP	R	_	8	case	_	_
8	Витоша	витоша	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Най-лошото	лош	ADJ	Ansd	Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	2	nsubj	_	_
2	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	7	punct	_	_
4	че	че	SCONJ	Cs	_	7	mark	_	_
5	тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	_	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
7	поразена	поразя-(се)	VERB	Vpptcv--sfi	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	ccomp	_	_
8	просто	просто	ADV	Dd	Degree=Pos	10	advmod	_	_
9	до	до	ADP	R	_	10	case	_	_
10	мозъка	мозък	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	7	obl	_	_
11	на	на	ADP	R	_	12	case	_	_
12	костите	кост	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	ВУЗ-овете	вуз-овете	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	са	съм	AUX	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
3	поставени	поставя-(се)	VERB	Vpptcv--p-i	Aspect=Perf|Definite=Ind|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
4	в	в	ADP	R	_	7	case	_	_
5	хроничен	хроничен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
6	финансов	финансов	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	дефицит	дефицит	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	3	iobj	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	_

~~~


