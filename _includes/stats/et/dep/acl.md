

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

41 nodes (0%) are attached to their parents as `acl`.

41 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.14634146341463.

The following 7 pairs of parts of speech are connected with `acl`: [et-pos/NOUN]()-[et-pos/VERB]() (30; 73% instances), [et-pos/PRON]()-[et-pos/VERB]() (4; 10% instances), [et-pos/PROPN]()-[et-pos/VERB]() (3; 7% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (1; 2% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (1; 2% instances), [et-pos/NUM]()-[et-pos/VERB]() (1; 2% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Eesmärk	ees_märk+0	NOUN	n/--	_	0	root	_	_
2	-	--	PUNCT	punc/--	_	1	punct	_	_
3	viia	vii+a	VERB	v/--	_	1	acl	_	_
4	telekaabel	tele_kaabel+0	NOUN	n/--	_	3	dobj	_	_
5	kuue	kuus+0	NUM	num/--	_	3	advmod	_	_
6	kuuga	kuu+ga	NOUN	n/--	_	5	nmod	_	_
7	50_000	50_000+0	NUM	num/--	_	3	advmod	_	_
8	Tallinna	Tallinn+0	PROPN	prop/--	_	9	nmod	_	_
9	kodusse	kodu+sse	NOUN	n/--	_	7	nmod	_	_
10	.	--	PUNCT	punc/--	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl	color:blue
1	müüja	müüja+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	nigu	nigu+0	PART	b/--	_	3	cc	_	_
3	ütles	ütle+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.NGP-P	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	ka	ka+0	ADV	adv/--	_	3	advmod	_	_
5	et	et+0	SCONJ	conj-s/sub	_	9	mark	_	_
6	noh	noh+0	PART	b/--	_	9	cc	_	_
7	nelisada	neli-sada+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	9	nsubj	_	_
8	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	siuke	siuke+0	PRON	pron-dem/dem,sg,nom	Case=Nom|Number=Sing|PronType=Dem	3	ccomp	_	_
10	nagu	nagu+0	SCONJ	conj-s/sub	_	12	mark	_	_
11	ta	tema+0	PRON	pron-pers/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	on	ole+0	VERB	v-fin/main,indic,pres,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	_
13	et	et+0	SCONJ	conj-c/sub	_	9	mark	_	_
14	,	--	PUNCT	punc/--	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Sõjakirve	sõja_kirves+0	NOUN	n/com,sg,gen,%cap	Case=Gen|Number=Sing	2	dobj	_	_
2	kaevas	kaeva+s	VERB	v/main,indic,impf,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	juuli	juuli+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	4	nmod	_	_
4	alguses	algus+s	NOUN	n/com,sg,in	Case=Ine|Number=Sing	2	nmod	_	_
5	välja	välja+0	ADV	adv/--	_	2	compound:prt	_	_
6	Telia	Telia+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	2	nsubj	_	_
7	,	--	PUNCT	punc/--	_	6	punct	_	_
8	kes	kes+0	PRON	pron/rel,sg,nom	Case=Nom|Number=Sing|PronType=Rel	9	nsubj	_	_
9	investeerib	investeeri+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
10	28	28+0	NUM	num/card,x?,digit	NumForm=Digit|NumType=Card	9	dobj	_	_
11	miljonit	miljon+t	NUM	num/card,sg,part,l	Case=Par|Number=Sing|NumForm=Word|NumType=Card	10	compound	_	_
12	krooni	kroon+0	NOUN	n/com,sg,part	Case=Par|Number=Sing	10	nmod	_	_
13	Tallinna	Tallinn+0	PROPN	prop/prop,sg,gen,%cap	Case=Gen|Number=Sing	14	nmod	_	_
14	suuruselt	suuruselt+0	NOUN	n/com,sg,all	Case=All|Number=Sing	15	nmod	_	_
15	teise	teine+0	NUM	num/ord,sg,adit,l	Case=Add|Number=Sing|NumForm=Word|NumType=Ord	17	nummod	_	_
16	kaabelTV	kaabelTV	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	17	nmod	_	_
17	firmasse	firma+sse	NOUN	n/com,sg,ill	Case=Ill|Number=Sing	9	nmod	_	_
18	Starman	Starman+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	17	nmod	_	_
19	.	--	PUNCT	punc/--	_	2	punct	_	_

~~~


