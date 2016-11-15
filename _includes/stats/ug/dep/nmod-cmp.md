

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Uyghur)

This relation is a language-specific subtype of [nmod]().
There are also 7 other language-specific subtypes of `nmod`: [nmod:abl](), [nmod:cau](), [nmod:clas](), [nmod:part](), [nmod:poss](), [nmod:ref](), [nmod:tmod]().

5 nodes (0%) are attached to their parents as `nmod:cmp`.

5 instances of `nmod:cmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 4 pairs of parts of speech are connected with `nmod:cmp`: [ug-pos/ADJ]()-[ug-pos/NOUN]() (2; 40% instances), [ug-pos/ADJ]()-[ug-pos/X]() (1; 20% instances), [ug-pos/NOUN]()-[ug-pos/NOUN]() (1; 20% instances), [ug-pos/VERB]()-[ug-pos/PRON]() (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:cmp	color:blue
1	گاھى	_	VERB	V	_	2	det	_	Translit=gahi
2	چاغلاردا	_	NOUN	N	_	18	nmod:tmod	_	Translit=chaghlarda
3	،	_	PUNCT	Y	_	2	punct	_	Translit=,
4	بويىدىن	_	NOUN	N	_	5	nmod:cmp	_	Translit=boyidin
5	ئېگىز	_	ADJ	A	_	6	amod	_	Translit=ëgiz
6	سازلارنى	_	NOUN	N	_	8	dobj	_	Translit=sazlarni
7	قولىغا	_	NOUN	N	_	8	nmod	_	Translit=qoligha
8	ئېلىۋېلىپ	_	VERB	V	_	18	advcl	_	Translit=ëliwëlip
9	،	_	PUNCT	Y	_	8	punct	_	Translit=,
10	تۇرۇپ	_	VERB	V	_	18	cc	_	Translit=turup
11	زىل	_	ADJ	A	_	12	amod	_	Translit=zil
12	تارىلارنى	_	NOUN	N	_	13	dobj	_	Translit=tarilarni
13	تىرىڭشىتسا	_	VERB	V	_	18	conj	_	Translit=tiringshitsa
14	،	_	PUNCT	Y	_	13	punct	_	Translit=,
15	تۇرۇپ	_	VERB	V	_	18	cc	_	Translit=turup
16	بوم	_	ADJ	A	_	17	amod	_	Translit=bom
17	تارىلارنى	_	NOUN	N	_	18	dobj	_	Translit=tarilarni
18	تىرىڭشىتاتتى	_	VERB	V	_	0	root	_	Translit=tiringshitatti
19	.	_	PUNCT	Y	_	18	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:cmp	color:blue
1	ئىلىم	_	NOUN	N	_	3	nsubj	_	Translit=ilim
2	تەھسىل	_	NOUN	N	_	3	compound	_	Translit=tehsil
3	قىلىشتا	_	VERB	V	_	7	advcl	_	Translit=qilishta
4	،	_	PUNCT	Y	_	3	punct	_	Translit=,
5	سىز	_	PRON	P	_	7	nsubj	_	Translit=siz
6	مەندىن	_	PRON	P	_	7	nmod:cmp	_	Translit=mendin
7	قېلىشمايدىكەنسىز	_	VERB	V	_	0	root	_	Translit=qëlishmaydikensiz
8	.	_	PUNCT	Y	_	7	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 nmod:cmp	color:blue
1	نامايىشنىڭ	_	NOUN	N	_	3	nmod:poss	_	Translit=namayishning
2	ئالدىنقى	_	ADJ	A	_	3	amod	_	Translit=aldinqi
3	ئاخشىمى	_	NOUN	N	_	45	advmod	_	Translit=axshimi
4	ئىككى	_	NUM	M	_	5	nummod	_	Translit=ikki
5	ئالدامچى	_	NOUN	N	_	45	nsubj	_	Translit=aldamchi
6	كىشىلەرگە	_	NOUN	N	_	16	nmod	_	Translit=kishilerge
7	ئۆزىنىڭ	_	PRON	P	_	15	nsubj	_	Translit=özining
8	پادىشاھنىڭ	_	NOUN	N	_	10	nmod:poss	_	Translit=padishahning
9	يېڭى	_	ADJ	A	_	10	amod	_	Translit=yëngi
10	كىيىمىنى	_	NOUN	N	_	11	dobj	_	Translit=kiyimini
11	پۈتتۈرىمەن	_	VERB	V	_	13	ccomp	_	Translit=püttürimen
12	،	_	PUNCT	Y	_	11	punct	_	Translit=,
13	دەپ	_	VERB	V	_	15	advcl	_	Translit=dep
14	كېچىلەپ	_	ADV	D	_	15	advmod	_	Translit=këchilep
15	ئىشلىگەنلىكىنى	_	NOUN	N	_	16	dobj	_	Translit=ishligenlikini
16	كۆرسىتىش	_	VERB	V	_	45	nmod	_	Translit=körsitish
17	ئۈچۈن	_	CONJ	C	_	16	mark	_	Translit=üchün
18	،	_	PUNCT	Y	_	17	punct	_	Translit=,
19	كېچىچە	_	NOUN	N	_	21	advmod	_	Translit=këchiche
20	كىرپىك	_	NOUN	N	_	21	compound	_	Translit=kirpik
21	قاقماي	_	NOUN	N	_	43	advmod	_	Translit=qaqmay
22	16	_	NUM	M	_	23	compound	_	Translit=16
23	دىن	_	X	X	_	24	nmod:cmp	_	Translit=din
24	ئارتۇق	_	ADJ	A	_	25	amod	_	Translit=artuq
25	شامنى	_	NOUN	N	_	26	dobj	_	Translit=shamni
26	يېقىپ	_	VERB	V	_	43	advcl	_	Translit=yëqip
27	قويۇپ	_	VERB	V	_	26	aux	_	Translit=qoyup
28	،	_	PUNCT	Y	_	27	punct	_	Translit=,
29	رەختنى	_	NOUN	N	_	31	dobj	_	Translit=rextni
30	دەستىگاھتىن	_	NOUN	N	_	31	nmod	_	Translit=destigahtin
31	چۈشۈرۈۋاتقان	_	VERB	V	_	38	conj	_	Translit=chüshürüwatqan
32	،	_	PUNCT	Y	_	31	punct	_	Translit=,
33	ئىككى	_	NUM	M	_	34	nummod	_	Translit=ikki
34	قايچا	_	NOUN	N	_	38	nmod	_	Translit=qaycha
35	بىلەن	_	ADP	R	_	34	case	_	Translit=bilen
36	قۇرۇقتىن	_	NOUN	N	_	37	compound	_	Translit=quruqtin
37	قۇرۇق	_	ADJ	A	_	38	advmod	_	Translit=quruq
38	كېسىۋاتقان	_	NOUN	N	_	43	conj	_	Translit=kësiwatqan
39	ۋە	_	CONJ	C	_	43	cc	_	Translit=we
40	يىپسىز	_	NOUN	N	_	41	amod	_	Translit=yipsiz
41	يىڭنە	_	NOUN	N	_	43	nmod	_	Translit=yingne
42	بىلەن	_	CONJ	C	_	41	case	_	Translit=bilen
43	تىكۋاتقان	_	NOUN	N	_	44	acl	_	Translit=tikwatqan
44	ھەركەتلەرنى	_	NOUN	N	_	45	dobj	_	Translit=herketlerni
45	قىلىپتۇ	_	VERB	V	_	0	root	_	Translit=qiliptu
46	.	_	PUNCT	Y	_	45	punct	_	Translit=.

~~~


