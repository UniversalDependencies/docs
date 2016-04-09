

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

68 nodes (1%) are attached to their parents as `aux`.

63 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97058823529412.

The following 3 pairs of parts of speech are connected with `aux`: [et-pos/VERB]()-[et-pos/AUX]() (66; 97% instances), [et-pos/ADJ]()-[et-pos/AUX]() (1; 1% instances), [et-pos/VERB]()-[et-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Winston	Winston+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	5	nsubj	_	_
2	hakkas	hakka+s	AUX	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	_
3	trepist	trepp+st	NOUN	n/com,sg,el	Case=Ela|Number=Sing	5	nmod	_	_
4	üles	üles+0	ADV	adv/--	_	5	compound:prt	_	_
5	minema	mine+ma	VERB	v/main,sup,ps,ill	Case=Ill|VerbForm=Sup	0	root	_	_
6	.	--	PUNCT	punc/--	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	Lennart	Lennart+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	6	nsubj	_	_
2	omakorda	oma_korda+0	ADV	adv/--	_	6	advmod	_	_
3	on	ole+0	AUX	v/aux,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	alati	alati+0	ADV	adv/--	_	6	advmod	_	_
5	olnud	ole+nud	VERB	v/main,partic,past,ps	Tense=Past|VerbForm=Part	6	cop	_	_
6	tugevam	tuge=vam+0	ADJ	adj/comp,sg,nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
7	poliitilise	poliitiline+0	ADJ	adj/pos,sg,gen	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	ämblikuvõrgu	ämbliku_võrk+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	9	nmod	_	_
9	punumises	punu=mine+s	NOUN	n/com,sg,in,%mine	Case=Ine|Number=Sing	6	nmod	_	_
10	.	--	PUNCT	punc/--	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 aux	color:blue
1	Alar	Alar+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	9	nsubj	_	_
2	ja	ja+0	CONJ	conj-c/crd	_	1	cc	_	_
3	Karin	Karin+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	1	conj	_	_
4	pid	pid	X	x/--	_	9	aux	_	_
5	peaaegult	peaaegult+0	ADV	adv/--	_	9	advmod	_	_
6	täna	täna+0	ADV	adv/--	_	9	advmod	_	_
7	pesumasina	pesu-masin+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	9	dobj	_	_
8	omale	oma+le	PRON	pron/refl,sg,all	Case=All|Number=Sing|PronType=Prs|Reflex=Yes	9	nmod	_	_
9	ostma	ost+ma	VERB	v-inf/main,sup,ps,ill,.NGP-P,.El,.Abl	Case=Ill|VerbForm=Sup	0	root	_	_
10	.	--	PUNCT	punc/--	_	9	punct	_	_
11	mõtlesid	mõtle+sid	VERB	v-fin/main,indic,impf,ps3,pl,ps,af,.FinV,.NGP-P,.InfP,.El,.All	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	conj	_	_
12	mis	mis+0	PRON	pron-rel/rel,sg,nom	Case=Nom|Number=Sing|PronType=Rel	13	dobj	_	_
13	teevad	tege+vad	VERB	v-fin/main,indic,pres,ps3,pl,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
14	ja	ja+0	CONJ	conj-c/crd	_	13	cc	_	_
15	,	--	PUNCT	punc/--	_	13	punct	_	_
16	aga	aga+0	CONJ	conj-c/crd	_	9	cc	_	_
17	jäi	jää+i	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	conj	_	_
18	ära	ära+0	ADV	adv/--	_	17	advmod	_	_
19	.	--	PUNCT	punc/--	_	17	punct	_	_
20	Mare	Mare+0	PROPN	prop/prop,sg,gen,.cap	Case=Gen|Number=Sing	22	nmod	_	_
21	käest	käest+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	20	case	_	_
22	küsisime	küsi+sime	VERB	v-fin/main,indic,impf,ps1,pl,ps,af,.FinV,.NGP-P,.Abl	Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	9	conj	_	_
23	ka	ka+0	ADV	adv/--	_	22	advmod	_	_
24	natukene	natukene+0	ADV	adv/--	_	22	advmod	_	_
25	nõu	nõu+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	22	dobj	_	_
26	ja	ja+0	CONJ	conj-c/crd	_	22	cc	_	_
27	,	--	PUNCT	punc/--	_	9	punct	_	_

~~~


