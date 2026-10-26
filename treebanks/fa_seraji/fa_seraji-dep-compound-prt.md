---
layout: base
title:  'Statistics of compound:prt in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fa_seraji-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fa_seraji-dep-compound-lvc.html">compound:lvc</a></tt>.

103 nodes (0%) are attached to their parents as `compound:prt`.

103 instances of `compound:prt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10679611650485.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-ADP.html">ADP</a></tt> (95; 92% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	می‌گویند	گفت	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	LTranslit=gft|OrigLemma=گفت#گو|Translit=mīgūīnd
2	مردگان	مرده	NOUN	N_PL	Number=Plur	6	nsubj	_	LTranslit=mrdh|Translit=mrdgān
3	دیگر	دیگر	ADV	ADV_NEG	Polarity=Neg	6	advmod	_	LTranslit=dīgr|Translit=dīgr
4	دم	دم	NOUN	N_SING	Number=Sing	6	compound:lvc	_	LTranslit=dm|Translit=dm
5	بر	بر	ADP	PREV	_	6	compound:prt	_	LTranslit=br|Translit=br
6	نمی‌آورند	آورد	VERB	V_PRS	Number=Plur|Person=3|Polarity=Neg|Tense=Pres	1	ccomp	_	LTranslit=Āūrd|Translit=nmīĀūrnd
7	و	و	CCONJ	CON	_	12	cc	_	LTranslit=ū|Translit=ū
8	دیگر	دیگر	ADV	ADV_NEG	Polarity=Neg	12	advmod	_	LTranslit=dīgr|Translit=dīgr
9	دهانی	دهان	NOUN	N_SING	Number=Sing	12	obj	_	LTranslit=dhān|Translit=dhānī
10	و	و	CCONJ	CON	_	11	cc	_	LTranslit=ū|Translit=ū
11	صدایی	صدا	NOUN	N_SING	Number=Sing	9	conj	_	LTranslit=ṣdā|Translit=ṣdāīī
12	ندارند	داشت	VERB	V_PRS	Number=Plur|Person=3|Polarity=Neg|Tense=Pres	6	conj	_	LTranslit=dāšt|OrigLemma=داشت#دار|SpaceAfter=No|Translit=ndārnd
13	.	.	PUNCT	DELM	_	1	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:prt	color:blue
1	وی	وی	PRON	PRO	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	LTranslit=ūī|Translit=ūī
2	میزان	میزان	NOUN	N_SING	Number=Sing	16	obj	_	LTranslit=mīzān|Translit=mīzān
3	سرمایه‌گذاری	سرمایه‌گذاری	NOUN	N_SING	Number=Sing	2	nmod:poss	_	LTranslit=srmāīhgḏārī|Translit=srmāīhgḏārī
4	برای	برای	ADP	P	_	6	case	_	LTranslit=brāī|Translit=brāī
5	این	این	DET	DET	_	6	det	_	LTranslit=āīn|Translit=āīn
6	واحدها	واحد	NOUN	N_PL	Number=Plur	3	nmod	_	LTranslit=ūāḥd|Translit=ūāḥdhā
7	را	را	PART	CLITIC	_	2	case	_	LTranslit=rā|Translit=rā
8	شش	شش	NUM	NUM	NumType=Card	9	nummod	_	LTranslit=šš|Translit=šš
9	هزار	هزار	NUM	NUM	NumType=Card	12	nummod	_	LTranslit=hzār|Translit=hzār
10	و	و	CCONJ	CON	_	11	cc	_	LTranslit=ū|Translit=ū
11	۶۵۰	۶۵۰	NUM	NUM	NumType=Card	9	conj	_	LTranslit=650|Translit=650
12	میلیارد	میلیارد	NOUN	N_SING	Number=Sing	13	compound	_	LTranslit=mīlīārd|Translit=mīlīārd
13	ریال	ریال	NOUN	N_SING	Number=Sing	16	obl	_	LTranslit=rīāl|Translit=rīāl
14	بر	بر	ADP	PREV	_	15	compound:prt	_	LTranslit=br|Translit=br
15	آورد	آورد#آور	NOUN	N_SING	Number=Sing	16	compound:lvc	_	LTranslit=Āūrd#Āūr|Translit=Āūrd
16	کرد	کرد	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=krd|OrigLemma=کرد#کن|SpaceAfter=No|Translit=krd
17	.	.	PUNCT	DELM	_	16	punct	_	LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 compound:prt	color:blue
1	بیرن	بیرن	NOUN	N_SING	Number=Sing	10	nsubj	_	LTranslit=bīrn|Translit=bīrn
2	از	از	ADP	P	_	4	case	_	LTranslit=āz|Translit=āz
3	یک	یک	NUM	NUM	NumType=Card	4	nummod	_	LTranslit=īk|Translit=īk
4	گزارش	گزارش	NOUN	N_SING	Number=Sing	10	obl	_	LTranslit=gzārš|Translit=gzārš
5	۲۰۰	۲۰۰	NUM	NUM	NumType=Card	6	nummod	_	LTranslit=200|Translit=200
6	صفحه‌ای	صفحه	ADJ	ADJ	Degree=Pos	4	amod	_	LTranslit=ṣfḥh|Translit=ṣfḥhāī
7	بسیار	بسیار	ADV	ADV	_	8	advmod	_	LTranslit=bsīār|Translit=bsīār
8	مهم	مهم	ADJ	ADJ	Degree=Pos	4	amod	_	LTranslit=mhm|Translit=mhm
9	نام	نام	NOUN	N_SING	Number=Sing	10	compound:lvc	_	LTranslit=nām|Translit=nām
10	برد	برد	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=brd|OrigLemma=برد#بر|Translit=brd
11	که	که	SCONJ	CON	_	30	mark	_	LTranslit=kh|Translit=kh
12	به	به	ADP	P	_	13	case	_	LTranslit=bh|Translit=bh
13	دلیل	دلیل	NOUN	N_SING	Number=Sing	30	obl	_	LTranslit=dlīl|Translit=dlīl
14	وجود	وجود	NOUN	N_SING	Number=Sing	13	nmod:poss	_	LTranslit=ūjūd|Translit=ūjūd
15	اسامی	اسم	NOUN	N_PL	Number=Plur	14	nmod:poss	_	LTranslit=āsm|Translit=āsāmī
16	برخی	برخی	DET	DET	_	17	det	_	LTranslit=brḫī|Translit=brḫī
17	ایرانیان	ایرانی	NOUN	N_PL	Number=Plur	15	nmod:poss	_	LTranslit=āīrānī|Translit=āīrānīān
18	که	که	SCONJ	CON	_	23	mark	_	LTranslit=kh|Translit=kh
19	هنوز	هنوز	ADV	ADV	_	23	advmod	_	LTranslit=hnūz|Translit=hnūz
20	در	در	ADP	P	_	21	case	_	LTranslit=dr|Translit=dr
21	قید	قید	NOUN	N_SING	Number=Sing	23	obl	_	LTranslit=qīd|Translit=qīd
22	حیات	حیات	NOUN	N_SING	Number=Sing	21	nmod:poss	_	LTranslit=ḥīāt|Translit=ḥīāt
23	هستند	هست	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	17	acl:relcl	_	LTranslit=hst|Translit=hstnd
24	سیا	سیا	NOUN	N_SING	Number=Sing	30	nsubj	_	LTranslit=sīā|Translit=sīā
25	از	از	ADP	P	_	26	case	_	LTranslit=āz|Translit=āz
26	انتشار	انتشار	NOUN	N_SING	Number=Sing	30	obl	_	LTranslit=āntšār|Translit=āntšār
27	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	26	nmod:poss	_	LTranslit=Ān|Translit=Ān
28	سر	سر	NOUN	N_SING	Number=Sing	30	compound:prt	_	LTranslit=sr|Translit=sr
29	باز	باز	ADP	PREV	_	28	fixed	_	LTranslit=bāz|Translit=bāz
30	می‌زند	زد	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	10	ccomp	_	LTranslit=zd|OrigLemma=زد#زن|SpaceAfter=No|Translit=mīznd
31	.	.	PUNCT	DELM	_	10	punct	_	LTranslit=.|Translit=.

~~~


