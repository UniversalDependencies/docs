

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [aux]().

666 nodes (0%) are attached to their parents as `aux:pass`.

664 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32432432432432.

The following 3 pairs of parts of speech are connected with `aux:pass`: [fi-pos/VERB]()-[fi-pos/AUX]() (661; 99% instances), [fi-pos/AUX]()-[fi-pos/AUX]() (3; 0% instances), [fi-pos/ADV]()-[fi-pos/AUX]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Syytä	syy	NOUN	N	Case=Par|Number=Sing	10	obj	_	_
2	sille	se	PRON	Pron	Case=All|Number=Sing|PronType=Dem	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	7	punct	_	_
4	miksi	miksi	ADV	Adv	_	7	advmod	_	_
5	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
6	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
7	suodatettu	suodattaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	_	_
9	en	ei	AUX	V	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	_	_
10	tiedä	tietää	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux:pass	color:blue
1	-	-	PUNCT	Punct	_	7	punct	4.1:punct	_
2	"	"	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
3	perävaunuyhdistelmällä	perä#vaunu#yhdistelmä	NOUN	N	Case=Ade|Number=Sing	7	orphan	4.1:obl	SpaceAfter=No
4	"	"	PUNCT	Punct	_	3	punct	_	_
4.1	tarkoitetaan	tarkoittaa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	_	_	_	_
5	tavarakuljetukseen	tavara#kuljetus	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
6	tarkoitettua	tarkoittaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
7	moottoriajoneuvoa	moottori#ajo#neuvo	NOUN	N	Case=Par|Number=Sing	0	root	4.1:obj	SpaceAfter=No
8	,	,	PUNCT	Punct	_	11	punct	_	_
9	johon	joka	PRON	Pron	Case=Ill|Number=Sing|PronType=Rel	11	obl	_	_
10	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	_
11	kytketty	kytkeä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	7	acl:relcl	_	_
12	varsinainen	varsinainen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	obj	_	_
13	tai	tai	CCONJ	C	_	14	cc	_	_
14	keskiakseliperävaunu	keski#akseli#perä#vaunu	NOUN	N	Case=Nom|Number=Sing	12	conj	11:obj	SpaceAfter=No
15	.	.	PUNCT	Punct	_	7	punct	4.1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:pass	color:blue
1	d	d	NOUN	N	Abbr=Yes|Case=Nom|Number=Sing	26	orphan	5.1:obl	SpaceAfter=No
2	)	)	PUNCT	Punct	_	1	punct	_	_
3	'	'	PUNCT	Punct	_	4	punct	_	SpaceAfter=No
4	matkatavaralla	matka#tavara	NOUN	N	Case=Ade|Number=Sing	26	orphan	5.1:obl	SpaceAfter=No
5	'	'	PUNCT	Punct	_	4	punct	_	SpaceAfter=No
5.1	tarkoitetaan	tarkoittaa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	_	_	_	_
6	,	,	PUNCT	Punct	_	11	punct	_	_
7	jollei	jos#ei	VERB	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	11	mark	_	_
8	sitä	se	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	11	obj	_	_
9	ole	olla	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
10	toisin	toisin	ADV	Adv	_	11	advmod	_	_
11	määritelty	määritellä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	26	orphan	5.1:advcl	SpaceAfter=No
12	,	,	PUNCT	Punct	_	11	punct	_	_
13	Montrealin	Montreal	PROPN	N	Case=Gen|Number=Sing	14	nmod:poss	_	_
14	yleissopimuksen	yleis#sopimus	NOUN	N	Case=Gen|Number=Sing	16	nmod:poss	_	_
15	17	17	NUM	Num	NumType=Card	16	nummod	_	_
16	artiklan	artikla	NOUN	N	Case=Gen|Number=Sing	18	nmod:poss	_	_
17	4	4	NUM	Num	NumType=Card	18	nummod	_	_
18	kohdassa	kohta	NOUN	N	Case=Ine|Number=Sing	19	obl	_	_
19	olevan	olla	VERB	V	Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	20	acl	_	_
20	määritelmän	määritelmä	NOUN	N	Case=Gen|Number=Sing	21	nmod:poss	_	_
21	mukaista	mukainen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	26	amod	_	_
22	sekä	sekä	CCONJ	C	_	23	cc:preconj	_	_
23	kirjattua	kirjata	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	26	acl	_	_
24	että	että	CCONJ	C	_	25	cc	_	_
25	kirjaamatonta	kirjaamaton	ADJ	A	Case=Par|Derivation=Ton|Number=Sing	23	conj	26:amod	_
26	matkatavaraa	matka#tavara	NOUN	N	Case=Par|Number=Sing	0	root	5.1:obj	SpaceAfter=No
27	;	;	PUNCT	Punct	_	26	punct	5.1:punct	_

~~~


