

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Urdu)

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

65981 tokens (54%) have a non-empty value of `Gender`.
8380 types (82%) occur at least once with a non-empty value of `Gender`.
7348 lemmas (82%) occur at least once with a non-empty value of `Gender`.
The feature is used with 14 part-of-speech tags: [ur-pos/NOUN]() (28853; 23% instances), [ur-pos/PROPN]() (14923; 12% instances), [ur-pos/ADP]() (9618; 8% instances), [ur-pos/VERB]() (6143; 5% instances), [ur-pos/AUX]() (4309; 3% instances), [ur-pos/ADJ]() (977; 1% instances), [ur-pos/PRON]() (555; 0% instances), [ur-pos/ADV]() (394; 0% instances), [ur-pos/DET]() (108; 0% instances), [ur-pos/NUM]() (44; 0% instances), [ur-pos/PART]() (44; 0% instances), [ur-pos/CCONJ]() (6; 0% instances), [ur-pos/X]() (6; 0% instances), [ur-pos/SCONJ]() (1; 0% instances).

### `NOUN`

28853 [ur-pos/NOUN]() tokens (99% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (28753; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (24255; 84%), <tt><a href="Case.html">Case</a>=Acc</tt> (15234; 53%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (5226; 18% of non-empty `Gender`): حکومت، پولیس، بات، پارٹی، کارروائی، ریاست، ٹیم، کمیٹی، کوشش، ہدایت
* `Masc` (23627; 82% of non-empty `Gender`): حاصل، آج، ضلع، عوام، افراد، طرح، طور، وقت، ملک، اجلاس
* `EMPTY` (426): اللہ، علیہ، مرکزی، صلی، مرحوم، وسلم، انتخابی، رضی، نقصان، نیوکلیئر

<table>
  <tr><th>Paradigm <i>حکومت</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td>حکومت</td><td>حکومت</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td>حکومتوں</td><td>حکومتوں, حکومتیں</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td>حکومت</td><td>حکومت</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td>حکومتیں</td><td>حکومتیں</td></tr>
</table>

### `PROPN`

14923 [ur-pos/PROPN]() tokens (98% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (14915; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (14868; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (8691; 58%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (592; 4% of non-empty `Gender`): پارٹی، دہلی، کانگریس، اردو، سبھا، سونیا، مسجد، حکومت، ریاست، بیگم
* `Masc` (14331; 96% of non-empty `Gender`): پی، سی، آئی، ایس، بی، کانگریس، ہندوستان، اے، ٹی، آر
* `EMPTY` (239): ریڈی، سنگھ، گاندھی، کرت، ریاستی، صدیقی، نائیڈو، برائے، سبھروال، و

<table>
  <tr><th>Paradigm <i>پی</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td>پی</td><td>پی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td>پی, بی</td><td>پی</td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 96% lemmas (3309) occur only with one value of `Gender`.

### `ADP`

9618 [ur-pos/ADP]() tokens (38% of all `ADP` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADP` and `Gender` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Post</tt> (9145; 95%), <tt><a href="Number.html">Number</a>=Sing</tt> (9132; 95%), <tt><a href="Case.html">Case</a>=Nom</tt> (4981; 52%).

`ADP` tokens may have the following values of `Gender`:

* `Fem` (3350; 35% of non-empty `Gender`): کی، وجہ، والی، جانب، حیثیت، طرف، کو، صورت، غرض، مدد
* `Masc` (6268; 65% of non-empty `Gender`): کے، کا، بعد، والے، ساتھ، جانب، دوران، قبل، ذریعہ، پاس
* `EMPTY` (15424): نے، سے، کے، کو، مےں، پر، میں، لیے، خلاف، تک

<table>
  <tr><th>Paradigm <i>کا</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td>کے, کا, کی, نے, سے</td><td>کی, کے, والی, کا</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td>کا, کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td>کے</td><td>کی</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td>کا, کے, کی</td><td>کی, کو, کا, کے</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td>کے</td><td>کی</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form</tt></td><td>کے</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Number.html">Number</a>=Sing</tt></td><td>کا</td><td>کی</td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td>کا</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td>کے</td><td></td></tr>
</table>

### `VERB`

6143 [ur-pos/VERB]() tokens (58% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (6043; 98%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5368; 87%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (5184; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (5158; 84%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4319; 70%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (4211; 69%).

`VERB` tokens may have the following values of `Gender`:

* `Fem` (1504; 24% of non-empty `Gender`): کی، دی، ہوئی، ہوگی، ہوتی، بتائی، رہی، آئی، کرتی، رکھی
* `Masc` (4639; 76% of non-empty `Gender`): کیا، کہا، کرتے، بتایا، دیا، ہوا، کیے، ہوگا، کرنا، کرنے
* `EMPTY` (4487): کر، ہو، کرنے، ہے، ہونے، کریں، ہوئے، دینے، دے، لے

<table>
  <tr><th>Paradigm <i>کر</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرتے</td><td>کرتیں</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کرتے, کرتا</td><td>کرتی, کرتے</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرتا, کرتے</td><td>کرتی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کرتے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرتے</td><td>کرتیں</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کئے, کیے</td><td>کی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کئے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیا, کئے, کیے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیا, کئے, کی, کر</td><td>کی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کیے, کئے</td><td>کی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیا, کئے, کرتے, کیے</td><td>کی, کیے</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیا, کیے, کئے, کر, کی</td><td>کی, کریں</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کیا, کئے, کیے</td><td>کی</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیے, کئے, کیں</td><td>کیں</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کیے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیے, کئے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیے, کئے, کریں</td><td>کیں</td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کیے, کئے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td>کیے</td><td></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Perf|<a href="VerbForm.html">VerbForm</a>=Part|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنا</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Voice.html">Voice</a>=Act</tt></td><td></td><td>کی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Voice.html">Voice</a>=Act</tt></td><td>کر</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنے</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے, کریںگے</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے, کرےگا, کریگا</td><td>کرےگی, کریں_گی, کریگی</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے</td><td>کرےگی, کریں_گی</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرینگے</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے, کرےنگے</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے, کرےنگے</td><td>کریں_گی</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں_گے, کریں</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں, کرے</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کریں</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کریں</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کریں</td><td>کریں</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td>کریں</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کریں</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td>کیے, کر</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Inf|<a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td>کرنی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Voice.html">Voice</a>=Act</tt></td><td>کیا, کرےگا, کر, کریں_گے</td><td>کرےگی, کی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنا</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Inf|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرنا, کرنے</td><td>کرنی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Inf|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کرنا</td><td>کرنی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Voice.html">Voice</a>=Act</tt></td><td>کہا, کرےگا, کیا, کر</td><td>کریں, کی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کیا</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنے</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Inf|<a href="Voice.html">Voice</a>=Act</tt></td><td>کرنے</td><td>کرنی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Inf|<a href="Voice.html">Voice</a>=Pass</tt></td><td>کرنے</td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td>کرنے</td><td></td></tr>
</table>

### `AUX`

4309 [ur-pos/AUX]() tokens (48% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (4063; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (3196; 74%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2966; 69%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (2873; 67%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (2819; 65%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (2680; 62%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (2294; 53%).

`AUX` tokens may have the following values of `Gender`:

* `Fem` (1128; 26% of non-empty `Gender`): گئی، تھی، رہی، دی، گی، سکتی، جاتی، جائےگی، تھیں، لی
* `Masc` (3181; 74% of non-empty `Gender`): گیا، تھا، دیا، ہیں، تھے، گئے، رہے، رہا، لیا، سکتا
* `EMPTY` (4743): ہے، ہوئے، ہےں، ہیں، جا، کر، جائے، جانے، چاہیے، ہوں

<table>
  <tr><th>Paradigm <i>ہے</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="Tense.html">Tense</a>=Pres</tt></td><td>ہیں</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polite.html">Polite</a>=Form|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہیں</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td>ہے, ہیں</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہیں, ہے</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres</tt></td><td>ہیں, ہے</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہیں</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہوں_گے</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td>ہیں, ہےں</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہیں</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres</tt></td><td>ہیں, ہے</td><td>ہیں</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>ہیں</td><td>ہیں</td></tr>
</table>

### `ADJ`

977 [ur-pos/ADJ]() tokens (11% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (541; 55%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (373; 38% of non-empty `Gender`): دوسری، بڑی، پہلی، پوری، نئی، آخری، خصوصی، اچھی، سیاسی، علاقائی
* `Masc` (604; 62% of non-empty `Gender`): بڑے، دوسرے، نئے، پہلے، پہلا، دوسرا، بڑا، پرانے، پچھلے، دونوں
* `EMPTY` (8025): جاری، شامل، دیگر، موجود، سابق، ہلاک، پیدا، واضح، کم، منعقد

<table>
  <tr><th>Paradigm <i>دوسرا</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td>دوسرے</td><td>دوسری</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="NumType.html">NumType</a>=Ord</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td>دوسری</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td>دوسرے, دوسرا</td><td>دوسری</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td>دوسرا, دوسرے</td><td>دوسری</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="NumType.html">NumType</a>=Ord</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="NumType.html">NumType</a>=Ord</tt></td><td></td><td>دوسری</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td>دوسرے</td><td></td></tr>
  <tr><td><tt><a href="NumType.html">NumType</a>=Ord</tt></td><td></td><td>دوسری</td></tr>
</table>

### `PRON`

555 [ur-pos/PRON]() tokens (11% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (515; 93%), <tt><a href="Number.html">Number</a>=Sing</tt> (370; 67%), <tt><a href="Polite.html">Polite</a>=EMPTY</tt> (355; 64%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (118; 21% of non-empty `Gender`): اپنی، ہماری، میری، انہیں، تمہاری، اتنی، اسی، ان، ایسی، جتنی
* `Masc` (437; 79% of non-empty `Gender`): انہوں، انہیں، اپنے، ہمارے، ایسا، ایسے، اُنھوں، اپنا، دوسرے، ہمارا
* `EMPTY` (4542): اس، وہ، ان، انہوں، جو، جس، یہ، اپنے، اب، کوئی

<table>
  <tr><th>Paradigm <i>وہ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Dat|<a href="Number.html">Number</a>=Sing|<a href="Polite.html">Polite</a>=Form|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہیں, انہوں, انھیں, انھوں, اُنھیں</td><td>انہیں</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انھیں</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انھیں, انہیں</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Polite.html">Polite</a>=Form|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہوں, اُنھوں, انھوں, ان</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td>اُس, انہوں, اُن</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td>اُن</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="Polite.html">Polite</a>=Form|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہوں</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہوں</td><td>ان</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Polite.html">Polite</a>=Form|<a href="PronType.html">PronType</a>=Prs</tt></td><td>اُنھیں, انھوں</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہیں</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polite.html">Polite</a>=Form|<a href="PronType.html">PronType</a>=Prs</tt></td><td>انہوں</td><td></td></tr>
</table>

### `ADV`

394 [ur-pos/ADV]() tokens (31% of all `ADV` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADV` and `Gender` co-occurred: <tt><a href="AdvType.html">AdvType</a>=EMPTY</tt> (393; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (390; 99%), <tt><a href="Person.html">Person</a>=3</tt> (362; 92%), <tt><a href="Case.html">Case</a>=Nom</tt> (354; 90%), <tt><a href="AdpType.html">AdpType</a>=Post</tt> (330; 84%).

`ADV` tokens may have the following values of `Gender`:

* `Fem` (5; 1% of non-empty `Gender`): بڑی، جانب، آس، کافی
* `Masc` (389; 99% of non-empty `Gender`): بعد، پیش، پہلے، دوران، طرف، آگے، باہر، جانب، سامنے، قبل
* `EMPTY` (867): پھر، بہت، پیش، سے، مزید، انتہائی، دوبارہ، جلد، ہنوز، ہمیشہ

<table>
  <tr><th>Paradigm <i>جانب</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Acc</tt></td><td>جانب</td><td></td></tr>
  <tr><td><tt><a href="AdpType.html">AdpType</a>=Post|<a href="Case.html">Case</a>=Nom</tt></td><td>جانب, عنقریب</td><td>جانب</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td>جانب</td></tr>
</table>

`Gender` seems to be **lexical feature** of `ADV`. 98% lemmas (53) occur only with one value of `Gender`.

### `DET`

108 [ur-pos/DET]() tokens (5% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (95; 88%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (91; 84%), <tt><a href="PronType.html">PronType</a>=Dem</tt> (88; 81%), <tt><a href="Case.html">Case</a>=Nom</tt> (64; 59%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (16; 15% of non-empty `Gender`): ایسی، اسی، انہیں، تھوڑی، جتنی
* `Masc` (92; 85% of non-empty `Gender`): ایسے، ایسا، یہ، اتنا، اسی، سارے، پورے، ایسی، دوسرے، کیا
* `EMPTY` (2151): اس، یہ، ان، کئی، تمام، اسی، کچھ، کوئی، ہر، چند

<table>
  <tr><th>Paradigm <i>یہ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td>اسی</td><td>اسی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td>ایسی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td>یہ, اسی</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td>اسی, اس</td><td>اسی</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td>ایسی</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td>یہ</td><td></td></tr>
</table>

### `PART`

44 [ur-pos/PART]() tokens (2% of all `PART` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PART` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (44; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (44; 100%).

`PART` tokens may have the following values of `Gender`:

* `Fem` (2; 5% of non-empty `Gender`): مسٹر، ویں
* `Masc` (42; 95% of non-empty `Gender`): مسٹر، جناب، حضرت، مسز، کے، بھلے، تعالی، تعالیٰ، حضرات، رفتہ
* `EMPTY` (2659): بھی، نہیں، مسٹر، ہی، نہ، صرف، جناب، کہ، تو، سے

<table>
  <tr><th>Paradigm <i>مسٹر</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td>مسٹر</td><td>مسٹر</td></tr>
  <tr><td><tt></tt></td><td>مسٹر</td><td></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PART`. 95% lemmas (18) occur only with one value of `Gender`.

### `NUM`

44 [ur-pos/NUM]() tokens (2% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (44; 100%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (3; 7% of non-empty `Gender`): تینوں، دوسری، پہلی
* `Masc` (41; 93% of non-empty `Gender`): دونوں، کروڑ، ایک، ہزار، 30، اےک، لاکھ، 02، 101، 29
* `EMPTY` (2150): اےک، ایک، دو، تین، دونوں، پانچ، چار، لاکھ، کروڑ، ہزار

<table>
  <tr><th>Paradigm <i>تین</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>تینوں</td><td>تینوں</td></tr>
</table>

`Gender` seems to be **lexical feature** of `NUM`. 96% lemmas (22) occur only with one value of `Gender`.

### `X`

6 [ur-pos/X]() tokens (27% of all `X` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `X` and `Gender` co-occurred: <tt><a href="Foreign.html">Foreign</a>=EMPTY</tt> (6; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5; 83%), <tt><a href="Person.html">Person</a>=3</tt> (5; 83%), <tt><a href="Case.html">Case</a>=Nom</tt> (4; 67%).

`X` tokens may have the following values of `Gender`:

* `Masc` (6; 100% of non-empty `Gender`): کاش، افسوس، جانے
* `EMPTY` (16): خدارا، کتنے، آخر، ئن، را، لوڈ، نئچ، نسبتاً، نہ، واقعی

### `CCONJ`

6 [ur-pos/CCONJ]() tokens (0% of all `CCONJ` tokens) have a non-empty value of `Gender`.

`CCONJ` tokens may have the following values of `Gender`:

* `Fem` (1; 17% of non-empty `Gender`): و
* `Masc` (5; 83% of non-empty `Gender`): و، آیا، اور، تاہم
* `EMPTY` (2904): اور، و، لیکن، جبکہ، تاہم، یا، مگر، نیز، لہذا، آیا

### `SCONJ`

1 [ur-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Gender`.

`SCONJ` tokens may have the following values of `Gender`:

* `Masc` (1; 100% of non-empty `Gender`): ،
* `EMPTY` (2424): کہ، تو، اگر، کیونکہ، تاکہ، بلکہ، حالانکہ، ,، چنانچہ، کیوںکہ

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<a href="../dep/compound.html">compound</a>]--> PROPN</tt> (6570; 92%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (3906; 70%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> PROPN</tt> (1977; 78%),
<tt>NOUN --[<a href="../dep/compound.html">compound</a>]--> NOUN</tt> (1631; 81%),
<tt>PROPN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (1033; 88%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PROPN</tt> (806; 54%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (767; 78%),
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (611; 92%),
<tt>PROPN --[<a href="../dep/nmod.html">nmod</a>]--> PROPN</tt> (595; 89%),
<tt>PROPN --[<a href="../dep/compound.html">compound</a>]--> NOUN</tt> (365; 94%).

