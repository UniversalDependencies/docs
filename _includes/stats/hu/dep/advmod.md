

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 8 language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

2 nodes (0%) are attached to their parents as `advmod`.

2 instances of `advmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `advmod`: [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 50% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 advmod	color:blue
1	Komoly	komoly	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod:att	_	_
2	fegyvertény	fegyvertény	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	például	például	ADV	_	_	2	advmod:mode	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	hogy	hogy	SCONJ	_	_	26	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	házelnök	házelnök	NOUN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
8	diszkrét	diszkrét	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	háttértárgyalásait	háttértárgyalás	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	dobj	_	_
10	követően	követő	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|VerbForm=PartPres	26	nmod	_	_
11	botrányok	botrány	NOUN	_	Case=Nom|Number=Plur	27	nmod	_	_
12	nélkül	nélkül	ADP	_	_	11	case	_	_
13	alig	alig	ADV	_	_	15	advmod	_	_
14	fél	fél	NUM	_	Case=Nom|Number=Sing|NumType=Frac	15	amod:att	_	_
15	év	év	NOUN	_	Case=Nom|Number=Sing	27	nmod	_	_
16	alatt	alatt	ADP	_	_	15	case	_	_
17	,	,	PUNCT	_	_	26	punct	_	_
18	ráadásul	ráadás	NOUN	_	Case=Ess|Number=Sing	27	nmod:obl	_	_
19	többé-kevésbé	többé-kevésbé	ADV	_	_	27	advmod:mode	_	_
20	közmegelégedésre	közmegelégedés	NOUN	_	Case=Sub|Number=Sing	27	nmod:obl	_	_
21	,	,	PUNCT	_	_	27	punct	_	_
22	hat	hat	NUM	_	Case=Nom|Number=Sing|NumType=Card	24	amod:att	_	_
23	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	24	amod:att	_	_
24	alkotmánybírót	alkotmánybíró	NOUN	_	Case=Acc|Number=Sing	27	dobj	_	_
25	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	_	_
26	képes	képes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod:att	_	_
27	választani	választ	VERB	_	VerbForm=Inf|Voice=Act	26	xcomp	_	_
28	a	a	DET	_	Definite=Def|PronType=Art	30	det	_	_
29	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	30	amod:att	_	_
30	Országgyűlés	Országgyűlés	PROPN	_	Case=Nom|Number=Sing	26	nsubj	_	_
31	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 6 advmod	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kisgazdák	kisgazda	NOUN	_	Case=Nom|Number=Plur	16	nsubj	_	_
3	,	,	PUNCT	_	_	16	punct	_	_
4	miközben	miközben	ADV	_	PronType=Rel	6	advmod:tlocy	_	_
5	ellene	ellene	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nmod	_	_
6	vannak	van	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	advmod	_	_
7	például	például	ADV	_	_	6	advmod:mode	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	biztosítási	biztosítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	adó	adó	NOUN	_	Case=Nom|Number=Sing	13	nmod:att	_	_
11	jövő	jövő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	12	amod:att	_	_
12	évi	évi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	13	amod:att	_	_
13	bevezetésének	bevezetés	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nmod:att	_	_
14	,	,	PUNCT	_	_	6	punct	_	_
15	állítólag	állítólag	ADV	_	_	16	advmod:mode	_	_
16	támogatnák	támogat	VERB	_	Definite=Def|Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	az	az	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	MDF	MDF	PROPN	_	Case=Nom|Number=Sing	19	nmod:att	_	_
19	javaslatát	javaslat	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	dobj	_	_
20	háromszázalékos	háromszázalékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	21	amod:att	_	_
21	kamatadóra	kamatadó	NOUN	_	Case=Sub|Number=Sing	16	nmod:obl	_	_
22	,	,	PUNCT	_	_	21	punct	_	_
23	amellyel	amely	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Rel	35	nmod:obl	_	_
24	a	a	DET	_	Definite=Def|PronType=Art	25	det	_	_
25	kormánykoalíció	kormánykoalíció	NOUN	_	Case=Nom|Number=Sing	27	nmod:att	_	_
26	legkisebb	kis	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	27	amod:att	_	_
27	pártja	párt	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	35	nsubj	_	_
28	a	a	DET	_	Definite=Def|PronType=Art	34	det	_	_
29	múlt	múlt	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	30	amod:att	_	_
30	hét	hét	NOUN	_	Case=Nom|Number=Sing	31	nmod:att	_	_
31	végi	végi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	34	amod:att	_	_
32	országos	országos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	33	amod:att	_	_
33	választmányi	választmányi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	34	amod:att	_	_
34	ülésén	ülés	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	35	nmod:obl	_	_
35	állt	áll	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	21	acl	_	_
36	elő	elő	ADV	_	Degree=Pos	35	compound:preverb	_	_
37	.	.	PUNCT	_	_	16	punct	_	_

~~~


