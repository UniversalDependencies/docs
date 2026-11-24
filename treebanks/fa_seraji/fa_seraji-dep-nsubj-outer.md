---
layout: base
title:  'Statistics of nsubj:outer in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fa_seraji-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fa_seraji-dep-nsubj-nc.html">nsubj:nc</a></tt>, <tt><a href="fa_seraji-dep-nsubj-pass.html">nsubj:pass</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:outer`.

7 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.7142857142857.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 3 nsubj:outer	color:blue
1	پژوهشگران	پژوهشگر	NOUN	N_PL	Number=Plur	2	nsubj	_	LTranslit=pžūhšgr|Translit=pžūhšgrān
2	می‌گویند	گفت	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	LTranslit=gft|OrigLemma=گفت#گو|Translit=mīgūīnd
3	جراحی‌های	جراحی	NOUN	N_PL	Number=Plur	17	nsubj:outer	_	LTranslit=jrāḥī|Translit=jrāḥīhāī
4	قلبی	قلبی	ADJ	ADJ	Degree=Pos	3	amod	_	LTranslit=qlbī|Translit=qlbī
5	که	که	SCONJ	CON	_	12	mark	_	LTranslit=kh|Translit=kh
6	تا	تا	ADP	P	_	7	case	_	LTranslit=tā|Translit=tā
7	کنون	کنون	ADV	ADV_TIME	Case=Tem	12	advcl	_	LTranslit=knūn|Translit=knūn
8	با	با	ADP	P	_	9	case	_	LTranslit=bā|Translit=bā
9	کمک	کمک	NOUN	N_SING	Number=Sing	12	obl	_	LTranslit=kmk|Translit=kmk
10	روبات	روبات	NOUN	N_SING	Number=Sing	9	nmod:poss	_	LTranslit=rūbāt|Translit=rūbāt
11	انجام	انجام	NOUN	N_SING	Number=Sing	12	compound:lvc	_	LTranslit=ānjām|Translit=ānjām
12	گرفته	گرفت	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	3	acl:relcl	_	LTranslit=grft|OrigLemma=گرفت#گیر|SpaceAfter=No|Translit=grfth
13	،	،	PUNCT	DELM	_	3	punct	_	LTranslit=,|Translit=,
14	همگی	همگی	PRON	PRO	PronType=Tot	17	nsubj	_	LTranslit=hmgī|Translit=hmgī
15	نتایج	نتیجه	NOUN	N_PL	Number=Plur	17	obj	_	LTranslit=ntījh|Translit=ntāīj
16	موفقیت‌آمیز	موفقیت‌آمیز	ADJ	ADJ	Degree=Pos	15	amod	_	LTranslit=mūfqītĀmīz|Translit=mūfqītĀmīz
17	داشته‌اند	داشت	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	2	ccomp	_	LTranslit=dāšt|OrigLemma=داشت#دار|SpaceAfter=No|Translit=dāšthānd
18	.	.	PUNCT	DELM	_	2	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 nsubj:outer	color:blue
1	ولی	ولی	CCONJ	CON	_	14	cc	_	LTranslit=ūlī|Translit=ūlī
2	آن	آن	DET	DET	_	3	det	_	LTranslit=Ān|Translit=Ān
3	نیمایی	نیمایی	NOUN	N_SING	Number=Sing	14	nsubj:outer	_	LTranslit=nīmāīī|Translit=nīmāīī
4	که	که	SCONJ	CON	_	8	mark	_	LTranslit=kh|Translit=kh
5	من	من	PRON	PRO	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	LTranslit=mn|Translit=mn
6	در	در	ADP	P	_	7	case	_	LTranslit=dr|Translit=dr
7	فیلم	فیلم	NOUN	N_SING	Number=Sing	8	obl	_	LTranslit=fīlm|Translit=fīlm
8	می‌دیدم	دید	VERB	V_PA	Number=Sing|Person=1|Tense=Past	3	acl:relcl	_	LTranslit=dīd|SpaceAfter=No|Translit=mīdīdm
9	،	،	PUNCT	DELM	_	3	punct	_	LTranslit=,|Translit=,
10	باید	بایست	AUX	V_AUX	VerbForm=Inf	14	aux	_	LTranslit=bāīst|OrigLemma=بایست#باید|Translit=bāīd
11	موهای	مو	NOUN	N_PL	Number=Plur	14	nsubj	_	LTranslit=mū|Translit=mūhāī
12	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	11	nmod:poss	_	LTranslit=āū|Translit=š
13	خیلی	خیلی	ADV	ADV	_	14	advmod	_	LTranslit=ḫīlī|Translit=ḫīlī
14	بلند	بلند	ADJ	ADJ	Degree=Pos	0	root	_	LTranslit=blnd|Translit=blnd
15	و	و	CCONJ	CON	_	16	cc	_	LTranslit=ū|Translit=ū
16	خشک	خشک	ADJ	ADJ	Degree=Pos	14	conj	_	LTranslit=ḫšk|Translit=ḫšk
17	باشد	بود	AUX	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	LTranslit=būd|OrigLemma=بود#باش|Translit=bāšd
18	و	و	CCONJ	CON	_	16	cc	_	LTranslit=ū|Translit=ū
19	مثل	مثل	ADV	ADV_COMP	_	20	case	_	LTranslit=mṯl|Translit=mṯl
20	شخصیت	شخصیت	NOUN	N_SING	Number=Sing	14	nmod	_	LTranslit=šḫṣīt|Translit=šḫṣīt
21	خود	خود	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	20	nmod:poss	_	LTranslit=ḫūd|Translit=ḫūd
22	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	21	nmod:poss	_	LTranslit=āū|Translit=š
23	خشک	خشک	ADJ	ADJ	Degree=Pos	20	appos	_	LTranslit=ḫšk|Translit=ḫšk
24	و	و	CCONJ	CON	_	25	cc	_	LTranslit=ū|Translit=ū
25	انعطاف‌ناپذیر	انعطاف‌ناپذیر	ADJ	ADJ	Degree=Pos	23	conj	_	LTranslit=ānʿṭāfnāpḏīr|Translit=ānʿṭāfnāpḏīr
26	و	و	CCONJ	CON	_	29	cc	_	LTranslit=ū|Translit=ū
27	یک	یک	NUM	NUM	NumType=Card	28	nummod	_	LTranslit=īk|Translit=īk
28	مقدار	مقدار	NOUN	N_SING	Number=Sing	29	nmod	_	LTranslit=mqdār|Translit=mqdār
29	تلخ‌تر	تلخ	ADJ	ADJ_CMPR	Degree=Cmp	25	conj	_	LTranslit=tlḫ|Translit=tlḫtr
30	از	از	ADP	P	_	31	case	_	LTranslit=āz|Translit=āz
31	بقیه	بقیه	NOUN	N_SING	Number=Sing	29	nmod	_	LTranslit=bqīh|SpaceAfter=No|Translit=bqīh
32	.	.	PUNCT	DELM	_	14	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 9 nsubj:outer	color:blue
1	زبان	زبان	NOUN	N_SING	Number=Sing	7	obj	_	LTranslit=zbān|Translit=zbān
2	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	LTranslit=āū|Translit=š
3	را	را	PART	CLITIC	_	1	obj	_	LTranslit=rā|Translit=rā
4	بی‌خود	بی‌خود	ADJ	ADJ	Degree=Pos	7	advmod	_	LTranslit=bīḫūd|Translit=bīḫūd
5	در	در	ADP	P	_	6	case	_	LTranslit=dr|Translit=dr
6	دهان	دهان	NOUN	N_SING	Number=Sing	7	obl	_	LTranslit=dhān|Translit=dhān
7	نمی‌چرخاند	چرخاند	VERB	V_PRS	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	LTranslit=črḫānd|Translit=nmīčrḫānd
8	و	و	CCONJ	CON	_	21	cc	_	LTranslit=ū|Translit=ū
9	این‌ها	این	PRON	PRO	Number=Plur|PronType=Dem	21	nsubj:outer	_	LTranslit=āīn|Translit=āīnhā
10	همه	همه	PRON	PRO	PronType=Tot	9	nmod	_	LTranslit=hmh|Translit=hmh
11	یعنی	یعنی	SCONJ	CON	_	21	mark	_	LTranslit=īʿnī|Translit=īʿnī
12	این	این	PRON	PRO	Number=Sing|PronType=Dem	21	mark	_	LTranslit=āīn|Translit=āīn
13	که	که	CCONJ	CON	_	12	fixed	_	LTranslit=kh|Translit=kh
14	روزه‌دار	روزه‌دار	NOUN	N_SING	Number=Sing	21	nsubj	_	LTranslit=rūzhdār|Translit=rūzhdār
15	با	با	ADP	P	_	16	case	_	LTranslit=bā|Translit=bā
16	اراده‌ای	اراده	NOUN	N_SING	Number=Sing	21	obl	_	LTranslit=ārādh|Translit=ārādhāī
17	قوی	قوی	ADJ	ADJ	Degree=Pos	16	amod	_	LTranslit=qūī|Translit=qūī
18	خود	خود	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	21	obj	_	LTranslit=ḫūd|Translit=ḫūd
19	را	را	PART	CLITIC	_	18	case	_	LTranslit=rā|Translit=rā
20	کنترل	کنترل	NOUN	N_SING	Number=Sing	21	compound:lvc	_	LTranslit=kntrl|Translit=kntrl
21	می‌کند	کرد	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	7	conj	_	LTranslit=krd|OrigLemma=کرد#کن|SpaceAfter=No|Translit=mīknd
22	.	.	PUNCT	DELM	_	7	punct	_	LTranslit=.|Translit=.

~~~


