---
layout: base
title:  'Statistics of acl:relcl in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-acl.html">acl</a></tt>.

132 nodes (1%) are attached to their parents as `acl:relcl`.

129 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.00757575757576.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (88; 67% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (25; 19% instances), <tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
1	Ci	ci	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	iobj	_	Clitic=Yes|TokenRange=1:4
2	sautau	sautari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=5:10
3	u	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	TokenRange=11:13
4	cori	cori	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	TokenRange=14:19
5	di	di	ADP	E	_	7	case	_	TokenRange=20:22
6	na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	TokenRange=23:26
7	manera	manera	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	TokenRange=27:34
8	ca	ca	PRON	PR	PronType=Rel	11	nsubj	_	TokenRange=35:38
9	si	si	PRON	PC	Person=3|PronType=Prs	11	expl	_	Clitic=Yes
10	lu	lu	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	Clitic=Yes
11	sintìa	sintiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	acl:relcl	_	TokenRange=45:52
12	nta	nta	ADP	E	_	14	case	_	_
13	la	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	gula	gula	NOUN	S	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No|TokenRange=59:63
15	.	.	PUNCT	FS	_	2	punct	_	TokenRange=63:64

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Se	se	INTJ	I	Polarity=Pos	4	discourse	_	SpaceAfter=No|TokenRange=2025:2027
2	,	,	PUNCT	FF	_	1	punct	_	TokenRange=2027:2028
3	sempri	sempri	ADV	B	_	4	advmod	_	TokenRange=2029:2035
4	chiḍḍi	chiddu	PRON	PD	Gender=Masc|Number=Plur|PronType=Dem	0	root	_	TokenRange=2036:2042
5	ca	ca	PRON	PR	PronType=Rel	7	nsubj	_	TokenRange=2043:2046
6	avìanu	aviri	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	aux	_	TokenRange=2047:2052
7	scumparu	scumpariri	VERB	V	VerbForm=Inf	4	acl:relcl	_	_
8	tu	tu	PRON	PC	Person=3|PronType=Prs	7	expl	_	Clitic=Yes
9	nta	nta	ADP	E	_	11	case	_	_
10	la	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	màchina	màchina	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No|TokenRange=2069:2077
12	.	.	PUNCT	FS	_	4	punct	_	TokenRange=2077:2078

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Ora	ora	ADV	B	_	3	advmod	_	TokenRange=2239:2242
2	cc'	ci	PRON	PC	PronType=Prs	3	expl	_	Clitic=Yes|SpaceAfter=No|TokenRange=2243:2245
3	era	essiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	TokenRange=2245:2248
4	un	unu	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	TokenRange=2249:2251
5	Gialanti	Gialanti	PROPN	SP	_	3	nsubj	_	SpaceAfter=No|TokenRange=2252:2260
6	,	,	PUNCT	FF	_	5	punct	_	TokenRange=2260:2261
7	ca	ca	PRON	PR	PronType=Rel	8	nsubj	_	TokenRange=2262:2265
8	misi	mettiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	_	TokenRange=2266:2270
9	'na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	TokenRange=2271:2274
10	scummissa	scummissa	NOUN	S	Gender=Fem|Number=Sing	8	obj	_	TokenRange=2275:2284
11	cu	cu	ADP	E	_	13	case	_	TokenRange=2285:2288
12	'i	lu	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	TokenRange=2289:2290
13	Calabrisi	Calabrisi	NOUN	S	_	10	nmod	_	SpaceAfter=No|TokenRange=2291:2300
14	,	,	PUNCT	FF	_	8	punct	_	TokenRange=2300:2301
15	di	di	ADP	E	_	16	mark	_	TokenRange=2302:2304
16	pigghiari	pigghiari	VERB	V	VerbForm=Inf	8	xcomp	_	TokenRange=2305:2313
17	a	a	ADP	E	_	19	case	_	TokenRange=2314:2315
18	sti	chistu	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	19	det	_	TokenRange=2316:2322
19	Sireni	Sirena	NOUN	S	Gender=Fem|Number=Sing	16	obl	_	SpaceAfter=No|TokenRange=2323:2329
20	.	.	PUNCT	FS	_	3	punct	_	TokenRange=2329:2330

~~~


