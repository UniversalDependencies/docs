---
layout: base
title:  'Statistics of aux in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="nds_lsdc-dep-aux-pass.html">aux:pass</a></tt>.

67 nodes (3%) are attached to their parents as `aux`.

42 instances of `aux` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.52238805970149.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (62; 93% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Wat	wat	PRON	_	_	4	obl	_	lemma[gml]=wat(te)³
2	myn	myn	DET	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det:poss	_	lemma[gml]=mîn²
3	süsterdochter	süsterdochter	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	lemma[gml]=süsterdochter
4	fiks	fiks	ADJ	_	Degree=Pos	0	root	_	_
5	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	4	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
6	:	:	PUNCT	_	_	10	punct	_	_
7	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	lemma[gml]=dê¹
8	kan	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	10	aux	_	lemma[gml]=künnen
9	gedanken	gedanke	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	lemma[gml]=gedanke
10	leasen	leasen	VERB	_	VerbForm=Inf	4	parataxis	_	lemma[gml]=lēsen¹|SpaceAfter=No
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 24 aux	color:blue
1	As	as	SCONJ	_	_	6	mark	_	lemma[gml]=alsô
2	de	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	lemma[gml]=dê¹
3	skoolmeister	skoolmeister	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	lemma[gml]=schôl(e)mêⁱster
4	dat	dat	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	lemma[gml]=dat²
5	hebräiske	hebräisk	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	lemma[gml]=hebrêes(ch)
6	höyrde	höyren	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	advcl	_	lemma[gml]=hö̂ren²|SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	_
8	sou	sou	ADV	_	_	13	advmod	_	lemma[gml]=sô²
9	kun	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Mod	13	aux	_	lemma[gml]=künnen
10	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	lemma[gml]=hê¹
11	endlik	endelik	ADV	_	_	13	advmod	_	lemma[gml]=endelĩk
12	wol	wol	ADV	_	_	13	advmod	_	lemma[gml]=wol²
13	denken	denken	VERB	_	VerbForm=Inf	0	root	_	lemma[gml]=denken|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	dat	dat	SCONJ	_	_	16	mark	_	lemma[gml]=dat²
16	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	advcl	_	lemma[gml]=et¹
17	keynen	keynen	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Neg	16	nsubj	_	lemma[gml]=kêⁱn²
18	anders	anders	ADJ	_	Gender=Neut|Number=Sing	17	nmod	_	lemma[gml]=anders
19	as	as	CCONJ	_	_	21	case	_	lemma[gml]=alsô
20	de	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	lemma[gml]=dê¹
21	her	heyr	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	18	obl	_	lemma[gml]=hêre⁴
22	pastor	pastor	NOUN	_	Gender=Masc|Number=Sing	21	flat	_	lemma[gml]=pâstôr
23	syn	weasen	AUX	_	VerbForm=Inf	16	cop	_	lemma[gml]=wēsen²
24	künne	künnen	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	16	aux	_	lemma[gml]=künnen|SpaceAfter=No
25	,	,	PUNCT	_	_	27	punct	_	_
26	un	un	CCONJ	_	_	27	cc	_	lemma[gml]=unde²
27	leyt	låten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	parataxis	_	lemma[gml]=lâten¹
28	gelyks	gelyks	ADV	_	_	27	advmod	_	lemma[gml]=gelîkes
29	lous	lous	ADP	_	_	27	compound:prt	_	lemma[gml]=lôs¹|SpaceAfter=No
30	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 28 aux	color:blue
1	Dee	dee	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	lemma[gml]=dê¹
2	kearl	kearl	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	lemma[gml]=kē̆rl
3	het	hebben	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	8	aux	_	lemma[gml]=hebben
4	my	ik	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	iobj	_	lemma[gml]=ik
5	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma[gml]=dê¹
6	drüdden	drüdde	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	lemma[gml]=drüdde
7	dag	dag	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	lemma[gml]=dach
8	ankündigd	ankündigen	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	lemma[gml]=ankündigen|SpaceAfter=No
9	,	,	PUNCT	_	_	25	punct	_	_
10	un	un	CCONJ	_	_	25	cc	_	lemma[gml]=unde²
11	wän	wan	SCONJ	_	_	18	mark	_	lemma[gml]=wan³
12	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	lemma[gml]=ik
13	myne	myn	DET	_	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	14	det:poss	_	lemma[gml]=mîn²
14	reakeninge	reakeninge	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	18	obj	_	lemma[gml]=rēkeninge
15	mid	mid	ADP	_	AdpType=Prep	17	case	_	lemma[gml]=mit
16	dem	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	lemma[gml]=dê¹
17	hiamel	hemmel	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	18	obl	_	lemma[gml]=hemmel
18	afsluten	afsluten	VERB	_	VerbForm=Inf	25	advcl	_	lemma[gml]=afslûten
19	wul	willen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbType=Mod	18	aux	_	lemma[gml]=willen¹|SpaceAfter=No
20	,	,	PUNCT	_	_	25	punct	_	_
21	sul	sköälen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbType=Mod	25	aux	_	lemma[gml]=schȫlen¹
22	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	25	nsubj	_	lemma[gml]=ik
23	et	et	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	25	obj	_	lemma[gml]=et¹
24	morgen	morgen	ADV	_	_	25	advmod	_	lemma[gml]=morgen²
25	doon	doon	VERB	_	VerbForm=Inf	8	parataxis	_	lemma[gml]=dôn¹|SpaceAfter=No
26	,	,	PUNCT	_	_	32	punct	_	_
27	öävermorgen	öävermorgen	ADV	_	_	32	advmod	_	lemma[gml]=ȫvermorgen²
28	möcht	möägen	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Mod	32	aux	_	lemma[gml]=mȫgen
29	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	32	nsubj	_	lemma[gml]=et¹
30	wol	wol	ADV	_	_	32	advmod	_	lemma[gml]=wol²
31	te	to	ADV	_	_	32	advmod	_	lemma[gml]=tô²
32	late	laat	ADJ	_	_	8	parataxis	_	lemma[gml]=lat³
33	syn	weasen	AUX	_	VerbForm=Inf	32	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
34	.	.	PUNCT	_	_	8	punct	_	_

~~~


