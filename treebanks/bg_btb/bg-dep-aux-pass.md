---
layout: base
title:  'Statistics of aux:pass in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="bg-dep-aux.html">aux</a></tt>.

930 nodes (1%) are attached to their parents as `aux:pass`.

889 instances of `aux:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09139784946237.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (904; 97% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (24; 3% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Дончо	дончо	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	_	_
2	беше	съм	VERB	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
3	дълбоко	дълбоко	ADV	Dm	Degree=Pos	4	advmod	_	_
4	вдаден	вдам	ADJ	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	в	в	ADP	R	_	6	case	_	_
6	работата	работа	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	4	iobj	_	_
7	си	свой	PRON	Psxto	Case=Nom|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 aux:pass	color:blue
1	Но	но	CCONJ	Cc	_	2	cc	_	_
2	ето	ето	PART	Tv	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	6	punct	_	_
4	те	аз	PRON	Ppe-op3	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	_	_
5	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	6	expl	_	_
6	решават	решавам-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
7	на	на	ADP	R	_	9	case	_	_
8	безпрецедентен	безпрецедентен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	ход	ход	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	_
10	и	и	CCONJ	Cp	_	20	cc	_	_
11	София	софия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	20	nsubj:pass	_	SpaceAfter=No
12	,	,	PUNCT	punct	_	15	punct	_	_
13	макар	макар	ADP	R	_	15	case	_	_
14	за	за	ADP	R	_	15	case	_	_
15	дни	ден	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	20	obl	_	SpaceAfter=No
16	,	,	PUNCT	punct	_	15	punct	_	_
17	ще	ще	AUX	Tx	_	20	aux:pass	_	_
18	бъде	бъда	VERB	Vyptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux:pass	_	_
19	идеално	идеално	ADV	Dm	Degree=Pos	20	advmod	_	_
20	почистена	почистя	ADJ	Vpptcv--sfi	Aspect=Perf|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	conj	_	_
21	и	и	CCONJ	Cp	_	22	cc	_	_
22	може	мога	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	conj	_	_
23	и	и	CCONJ	Cp	_	25	cc	_	_
24	да	да	AUX	Tx	_	25	aux	_	_
25	заприлича	заприличам	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	xcomp	_	_
26	на	на	ADP	R	_	28	case	_	_
27	европейска	европейски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	28	amod	_	_
28	столица	столица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	25	iobj	_	SpaceAfter=No
29	.	.	PUNCT	punct	_	2	punct	_	_

~~~


