

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

10845 tokens (12%) have a non-empty value of `PronType`.
562 types (2%) occur at least once with a non-empty value of `PronType`.
148 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [sk-pos/PRON]() (6069; 7% instances), [sk-pos/DET]() (3901; 4% instances), [sk-pos/ADV]() (875; 1% instances).

### `PRON`

6069 [sk-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (5108; 84%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4094; 67%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (3253; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (153; 3% of non-empty `PronType`): <em>niečo, niekto, čosi, ktosi, niečím, všeličo, čokoľvek, niekoho, niečoho, ktokoľvek</em>
* `Int,Rel` (271; 4% of non-empty `PronType`): <em>čo, kto, koho, čom, čím, Čože, čomu, komu, ktože, čoho</em>
* `Neg` (152; 3% of non-empty `PronType`): <em>nič, nikto, nik, nikoho, nikomu, ničoho, ničom, ničomu</em>
* `Prs` (5475; 90% of non-empty `PronType`): <em>sa, si, mi, ho, ma, mu, ju, ja, jej, ich</em>
* `Tot` (18; 0% of non-empty `PronType`): <em>všetko, všetci, všetky, všetkých, všetku, všetkému</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (39) occur only with one value of `PronType`.

### `DET`

3901 [sk-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Gender[psor].html">Gender[psor]</a>=EMPTY</tt> (3492; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (3113; 80%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (3061; 78%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (2792; 72%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (2591; 66%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (1591; 41% of non-empty `PronType`): <em>to, ten, tom, toho, tomu, toto, tejto, tej, tohto, tá</em>
* `Emp` (56; 1% of non-empty `PronType`): <em>sám, sama, samé, sami, samo, samom, samej, samého, samých, samým</em>
* `Ind` (304; 8% of non-empty `PronType`): <em>niekoľko, iné, nejaký, akýsi, niektoré, nejaké, iných, niektorých, iný, niekoľkých</em>
* `Int,Rel` (517; 13% of non-empty `PronType`): <em>ktoré, ktorý, ktorá, ktorú, ktorí, ktorého, ktorej, ktorých, ktorom, aké</em>
* `Neg` (59; 2% of non-empty `PronType`): <em>nijaké, nijaký, žiadne, nijaká, nijakú, žiaden, nijakej, nijakého, žiadna, žiadneho</em>
* `Prs` (1107; 28% of non-empty `PronType`): <em>jeho, jej, ich, svoje, môj, svojej, moja, moje, svoju, svojho</em>
* `Tot` (267; 7% of non-empty `PronType`): <em>všetko, všetky, všetci, každý, všetkých, každú, všetkým, každom, každého, každej</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (48) occur only with one value of `PronType`.

### `ADV`

875 [sk-pos/ADV]() tokens (22% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (875; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (481; 55% of non-empty `PronType`): <em>tu, tam, tak, vtedy, takto, zatiaľ, preto, sem, dovtedy, odvtedy</em>
* `Ind` (77; 9% of non-empty `PronType`): <em>niekedy, niekde, inak, kedysi, niekoľkokrát, akosi, kdesi, inde, inokedy, nejako</em>
* `Int,Rel` (206; 24% of non-empty `PronType`): <em>kde, ako, prečo, kam, kedy, odkiaľ, odkedy, Kamže, kadiaľ, kdeby</em>
* `Neg` (67; 8% of non-empty `PronType`): <em>nikdy, nikam, nijako, nikde</em>
* `Tot` (44; 5% of non-empty `PronType`): <em>vždy, všade, Všelijako</em>
* `EMPTY` (3081): <em>potom, veľmi, opäť, teraz, raz, stále, dobre, už, dnes, neskôr</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (61) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (5; 71%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (5; 63%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 100%),
<tt>PRON --[<a href="../dep/orphan.html">orphan</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/dep.html">dep</a>]--> ADV</tt> (1; 100%).

