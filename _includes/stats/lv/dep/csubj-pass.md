

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is a language-specific subtype of [csubj]().

8 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 3 pairs of parts of speech are connected with `csubj:pass`: [lv-pos/VERB]()-[lv-pos/VERB]() (6; 75% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (1; 13% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (1; 13% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 csubj:pass	color:blue
1	Cik	cik	ADV	r0q	PronType=Int	3	advmod	_	_
2	man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
3	zināms	zināt	VERB	vmnpdmsnppn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	7	advcl	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	_	_
5	šāda	šāda	DET	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	prakse	prakse	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	ir	būt	VERB	vmnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	Vācijā	Vācija	PROPN	npfsl4	Case=Loc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
9	,	,	PUNCT	zc	_	14	punct	_	_
10	kur	kur	ADV	r0p	PronType=Int	14	advmod	_	_
11	jau	jau	ADV	r0t	_	14	advmod	_	_
12	noteikumos	noteikums	NOUN	ncmpl1	Case=Loc|Gender=Masc|Number=Plur	14	obl	_	_
13	tiek	tikt	VERB	vtnipi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	aux	_	_
14	iestrādāts	iestrādāt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	acl	_	SpaceAfter=No
15	,	,	PUNCT	zc	_	18	punct	_	_
16	ka	ka	SCONJ	css	_	18	mark	_	_
17	būs	būt	VERB	vcnifii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	18	aux	_	_
18	jāizmanto	izmantot	VERB	vmnd0t200an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	14	csubj:pass	_	_
19	šis	šis	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	20	det	_	_
20	kurināmais	kurināt	VERB	vmnpdmsnppy	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	18	obj	_	SpaceAfter=No
21	,	,	PUNCT	zc	_	23	punct	_	_
22	nevis	nevis	CCONJ	ccs	_	23	cc	_	_
23	gāze	gāze	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	20	conj	_	SpaceAfter=No
24	,	,	PUNCT	zc	_	25	punct	_	_
25	šķelda	šķelda	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	23	conj	_	_
26	vai	vai	CCONJ	ccs	_	27	cc	_	_
27	kas	kas	PRON	pi000nn	Case=Nom|PronType=Ind	23	conj	_	_
28	cits	cits	PRON	pi0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	27	compound	_	SpaceAfter=No
29	.	.	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	Zīmītē	zīmīte	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	3	obl	_	_
2	stāvēja	stāvēt	VERB	vtnist330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	_
3	rakstīts	rakstīt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
4	:	:	PUNCT	zo	_	5	punct	_	_
5	Kas	kas	PRON	pq000nn	Case=Nom|PronType=Int	3	csubj:pass	_	_
6	Tu	tu	PRON	pp20snn	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
7	esi	būt	VERB	vcnipii2san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
8	?	?	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 csubj:pass	color:blue
1	Pašlaik	pašlaik	ADV	r0t	_	3	advmod	_	_
2	plāns	plāns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	ir	būt	VERB	vmnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	apstiprināšanas	apstiprināšana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
5	procesā	process	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
6	un	un	CCONJ	ccs	_	9	cc	_	_
7	tajā	tas	PRON	pd0msln	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
8	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	noteikts	noteikt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	SpaceAfter=No
10	,	,	PUNCT	zc	_	16	punct	_	_
11	ka	ka	SCONJ	css	_	16	mark	_	_
12	reģionālo	reģionāls	ADJ	armpgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	13	amod	_	_
13	plānu	plāns	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	_
14	izstrāde	izstrāde	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
15	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
16	obligāta	obligāta	ADJ	arfsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	csubj:pass	_	SpaceAfter=No
17	.	.	PUNCT	zs	_	3	punct	_	_

~~~


