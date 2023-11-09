---
layout: base
title:  'Statistics of csubj:outer in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="xcl_caval-dep-csubj-caus.html">csubj:caus</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:outer`.

3 instances of `csubj:outer` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.

The following 3 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="xcl_caval-pos-AUX.html">AUX</a></tt>-<tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 28 csubj:outer	color:blue
1	Ասէ	ասեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=Asē|LTranslit=asem|Gloss=say
2	ց	ց	ADP	_	_	3	case	_	SpaceAfter=No|Translit=cʻ|LTranslit=cʻ|Gloss=to
3	նոսա	նա	PRON	_	Case=Acc|Number=Plur|PronType=Dem	1	obl	_	Translit=nosa|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
4	Յիսուս	Յիսուս	PROPN	_	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No|Translit=Yisows|LTranslit=Yisows|Gloss=Jesus
5	՝	՝	PUNCT	_	_	6	punct	_	Translit=;|LTranslit=;
6	հարցից	հարցանեմ	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	1	ccomp	_	Translit=harcʻicʻ|LTranslit=harcʻanem|Gloss=ask
7	ինչ	ինչ	PRON	_	Animacy=Inan|Case=Acc|Number=Sing|PronType=Ind	6	obj	_	Translit=inčʻ|LTranslit=inčʻ|LId=ինչ-1|Gloss=something
8	ց	ց	ADP	_	_	9	case	_	SpaceAfter=No|Translit=cʻ|LTranslit=cʻ|Gloss=to
9	ձեզ	դուք	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	6	obl	_	Translit=jez|LTranslit=dowkʻ|Gloss=you_(pl)
10	զինչ	զինչ	PRON	_	Animacy=Inan|Case=Nom|Number=Sing|PronType=Int	12	nsubj	_	Translit=zinčʻ|LTranslit=zinčʻ|Gloss=what
11	՞	՞	PUNCT	_	_	10	punct	_	Translit=?|LTranslit=?
12	արժան	արժան	ADJ	_	Case=Nom|Number=Sing	6	ccomp	_	Translit=aržan|LTranslit=aržan|Gloss=worthy
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	Translit=ē|LTranslit=em|Gloss=be
14	ի	ի	ADP	_	_	15	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
15	շաբաթու	շաբաթ	NOUN	_	Case=Loc|Number=Sing	12	obl	_	SpaceAfter=No|Translit=šabatʻow|LTranslit=šabatʻ|Gloss=week
16	՝	՝	PUNCT	_	_	17	punct	_	Translit=;|LTranslit=;
17	բարի	բարի	ADJ	_	Case=Acc|Number=Sing	19	amod	_	Translit=bari|LTranslit=bari|Gloss=good
18	՞	՞	PUNCT	_	_	17	punct	_	Translit=?|LTranslit=?
19	ինչ	ինչ	PRON	_	Animacy=Inan|Case=Acc|Number=Sing|PronType=Ind	20	obj	_	Translit=inčʻ|LTranslit=inčʻ|LId=ինչ-1|Gloss=something
20	առնել	առնեմ	VERB	_	VerbForm=Inf	12	csubj:outer	_	SpaceAfter=No|Translit=aṙnel|LTranslit=aṙnem|Gloss=make
21	.	.	PUNCT	_	_	24	punct	_	Translit=:|LTranslit=:
22	եթե	եթե	SCONJ	_	_	24	cc	_	Translit=etʻe|LTranslit=etʻē|LId=եթե-1|Gloss=whether
23	չար	չար	ADJ	_	Case=Acc|Number=Sing	24	obj	_	Translit=čʻar|LTranslit=čʻar|Gloss=evil
24	գործել	գործեմ	VERB	_	VerbForm=Inf	20	conj	_	SpaceAfter=No|Translit=gorcel|LTranslit=gorcem|Gloss=work
25	՝	՝	PUNCT	_	_	28	punct	_	Translit=;|LTranslit=;
26	ոգի	ոգի	NOUN	_	Case=Acc|Number=Sing	28	obj	_	Translit=ogi|LTranslit=ogi|Gloss=soul
27	մի	մի	DET	_	Case=Acc|Definite=Spec|Number=Sing	26	det	_	Translit=mi|LTranslit=mi|LId=մի-2|Gloss=certain
28	ապրեցուցանել	ապրեցուցանեմ	VERB	_	VerbForm=Inf	12	csubj:outer	_	Translit=aprecʻowcʻanel|LTranslit=aprecʻowcʻanem|Gloss=save
29	՞	՞	PUNCT	_	_	28	punct	_	Translit=?|LTranslit=?
30	թե	թե	CCONJ	_	_	31	cc	_	Translit=tʻe|LTranslit=tʻē|LId=թե-2|Gloss=or
31	կորուսանել	կորուսանեմ	VERB	_	VerbForm=Inf	28	conj	_	SpaceAfter=No|Translit=korowsanel|LTranslit=korowsanem|Gloss=destroy
32	:	:	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:outer	color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	եղեւ	լինիմ	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ełew|LTranslit=linim|Gloss=be
3	ի	ի	ADP	_	_	4	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
4	վաղիւ	վաղիւ	NOUN	_	Case=Acc|Number=Sing	2	obl	_	SpaceAfter=No|Translit=vałiw|LTranslit=vałiw|LId=վաղիւ-2|Gloss=next_day
5	ն	ն	DET	_	Definite=Def|PronType=Dem	4	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
6	՝	՝	PUNCT	_	_	7	punct	_	Translit=;|LTranslit=;
7	երթայր	երթամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	csubj:outer	_	Translit=ertʻayr|LTranslit=ertʻam|Gloss=go
8	ի	ի	ADP	_	_	9	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
9	քաղաք	քաղաք	NOUN	_	Case=Acc|Number=Sing	7	obl	_	Translit=kʻałakʻ|LTranslit=kʻałakʻ|Gloss=city
10	մի	մի	DET	_	Case=Acc|Definite=Spec|Number=Sing	9	det	_	Translit=mi|LTranslit=mi|LId=մի-2|Gloss=certain
11	որում	որ	PRON	_	Case=Dat|Number=Sing|PronType=Rel	14	iobj	_	Translit=orowm|LTranslit=or|LId=որ-1|Gloss=which
12	անուն	անուն	NOUN	_	Case=Nom|Number=Sing	14	nsubj	_	Translit=anown|LTranslit=anown|Gloss=name
13	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	Translit=ēr|LTranslit=em|Gloss=be
14	Նային	Նային	PROPN	_	Case=Nom|Number=Sing	9	acl	_	SpaceAfter=No|Translit=Nayin|LTranslit=Nayin|Gloss=Nayin
15	՝	՝	PUNCT	_	_	16	punct	_	Translit=;|LTranslit=;
16	երթային	երթամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	Translit=ertʻayin|LTranslit=ertʻam|Gloss=go
17	ընդ	ընդ	ADP	_	_	18	case	_	Translit=ənd|LTranslit=ənd|LId=ընդ-1|Gloss=with/during/for
18	նմա	նա	PRON	_	Case=Loc|Number=Sing|PronType=Dem	16	obl	_	Translit=nma|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
19	եւ	եւ	ADV	_	_	16	cc	_	Translit=ew|LTranslit=ew|LId=եւ-1|Gloss=and
20	աշակերտք	աշակերտ	NOUN	_	Case=Nom|Number=Plur	16	nsubj	_	Translit=ašakertkʻ|LTranslit=ašakert|Gloss=disciple
21	նորա	նա	PRON	_	Case=Gen|Number=Sing|PronType=Dem	20	nmod	_	SpaceAfter=No|Translit=nora|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
22	.	.	PUNCT	_	_	24	punct	_	Translit=:|LTranslit=:
23	եւ	եւ	CCONJ	_	_	24	cc	_	Translit=ew|LTranslit=ew|Gloss=and
24	ժողովուրդ	ժողովուրդ	NOUN	_	Case=Nom|Number=Sing	20	conj	_	Translit=žołovowrd|LTranslit=žołovowrd|Gloss=people
25	բազում	բազում	DET	_	Case=Nom|Number=Sing|PronType=Tot	24	det	_	SpaceAfter=No|Translit=bazowm|LTranslit=bazowm|Gloss=many
26	՝	՝	PUNCT	_	_	2	punct	_	Translit=;|LTranslit=;

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj:outer	color:blue
1	Եւ	եւ	CCONJ	_	_	4	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	որք	որ	PRON	_	Case=Nom|Number=Plur|PronType=Rel	4	nsubj	_	Translit=orkʻ|LTranslit=or|LId=որ-1|Gloss=which
3	յ	ի	ADP	_	_	4	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to/in/from
4	ապառաժի	ապառաժ	NOUN	_	Case=Loc|Number=Sing	11	csubj:outer	_	SpaceAfter=No|Translit=apaṙaži|LTranslit=apaṙaž|Gloss=rock
5	ն	ն	DET	_	Definite=Def|PronType=Dem	4	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
6	.	.	PUNCT	_	_	4	punct	_	Translit=:|LTranslit=:
7	որք	որ	PRON	_	Case=Nom|Number=Plur|PronType=Rel	11	nsubj	_	Translit=orkʻ|LTranslit=or|LId=որ-1|Gloss=which
8	յորժամ	յորժամ	SCONJ	_	_	9	mark	_	Translit=yoržam|LTranslit=yoržam|LId=յորժամ-2|Gloss=since
9	լսիցեն	լսեմ	VERB	_	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	11	advcl	_	Translit=lsicʻen|LTranslit=lsem|Gloss=hear
10	խնդութեամբ	խնդութիւն	NOUN	_	Case=Ins|Number=Sing	11	obl	_	Translit=xndowtʻeamb|LTranslit=xndowtʻiwn|Gloss=joy
11	ընդունին	ընդունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=əndownin|LTranslit=əndownim|Gloss=accept
12	զ	զ	DET	_	Definite=Def	13	det	_	SpaceAfter=No|Translit=z|LTranslit=z
13	բան	բան	NOUN	_	Case=Acc|Number=Sing	11	obj	_	SpaceAfter=No|Translit=ban|LTranslit=ban|Gloss=word
14	ն	ն	DET	_	Definite=Def|PronType=Dem	13	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
15	՝	՝	PUNCT	_	_	11	punct	_	Translit=;|LTranslit=;
16	եւ	եւ	CCONJ	_	_	19	cc	_	Translit=ew|LTranslit=ew|Gloss=and
17	արմատս	արմատ	NOUN	_	Case=Acc|Number=Plur	19	obj	_	Translit=armats|LTranslit=armat|Gloss=root
18	ոչ	ոչ	PART	_	Polarity=Neg	19	advmod	_	Translit=očʻ|LTranslit=očʻ|Gloss=not
19	ունիցին	ունիմ	VERB	_	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	11	conj	_	Translit=ownicʻin|LTranslit=ownim|Gloss=have
20	որք	որ	PRON	_	Case=Nom|Number=Plur|PronType=Rel	23	nsubj	_	Translit=orkʻ|LTranslit=or|LId=որ-1|Gloss=which
21	առժամանակ	առժամանակ	ADV	_	_	23	advmod	_	Translit=aṙžamanak|LTranslit=aṙžamanak|Gloss=for_the_time_being
22	մի	մի	PART	_	Polarity=Neg	23	advmod	_	Translit=mi|LTranslit=mi|LId=մի-1|Gloss=don't
23	հաւատան	հաւատամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	parataxis	_	SpaceAfter=No|Translit=hawatan|LTranslit=hawatam|Gloss=believe
24	.	.	PUNCT	_	_	29	punct	_	Translit=:|LTranslit=:
25	եւ	եւ	CCONJ	_	_	29	cc	_	Translit=ew|LTranslit=ew|Gloss=and
26	ի	ի	ADP	_	_	27	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
27	ժամանակի	ժամանակ	NOUN	_	Case=Loc|Number=Sing	29	obl	_	Translit=žamanaki|LTranslit=žamanak|Gloss=time
28	փորձութեան	փորձութիւն	NOUN	_	Case=Gen|Number=Sing	27	nmod	_	Translit=pʻorjowtʻean|LTranslit=pʻorjowtʻiwn|Gloss=temptation
29	հեռանան	հեռանամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	conj	_	SpaceAfter=No|Translit=heṙanan|LTranslit=heṙanam|Gloss=go_away
30	:	:	PUNCT	_	_	11	punct	_	Translit=.|LTranslit=.

~~~


