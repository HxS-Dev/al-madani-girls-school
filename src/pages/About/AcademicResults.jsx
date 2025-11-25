import React from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { contentData } from '../../data/content'

const AcademicResults = () => {
  const { academicResults } = contentData.about
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Academic Results
        </h2>
        <p className="text-xl text-sage">
          Our students consistently achieve outstanding academic results in their GCSE exams.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <div className="bg-navy/10 rounded-xl p-6 text-center max-w-3xl mx-auto">
          <ul className="space-y-2 text-lg text-navy font-semibold">
            <li>99% Pass rate vs 70% nationally (Grades 4-9)</li>
            <li>100% Pass rate in English, Maths and multiple other subjects (Grades 4-9)</li>
            <li>68% Grade ‘A or better’ vs 22% nationally (Grades 7-9)</li>
            <li>More than three times higher overall on Grade ‘A or better’ than the national average (Grades 7-9)</li>
          </ul>
        </div>
      </div>

      {/* Pass (grades 4-9) Table */}
      <section className="mb-12">
        <h3 className="font-display text-2xl font-bold text-charcoal mb-6 text-center">Pass (grades 4-9)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-navy text-white">
                <th className="py-2 px-3">Subject</th>
                <th className="py-2 px-3">English Lang.</th>
                <th className="py-2 px-3">English Lit</th>
                <th className="py-2 px-3">Maths</th>
                <th className="py-2 px-3">Biology</th>
                <th className="py-2 px-3">Chemistry</th>
                <th className="py-2 px-3">Physics</th>
                <th className="py-2 px-3">Computer Studies</th>
                <th className="py-2 px-3">Citizenship</th>
                <th className="py-2 px-3">History</th>
                <th className="py-2 px-3">Religious Studies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-cream">
                <td className="py-2 px-3 font-semibold">National average – 16 year olds %</td>
                <td>71</td>
                <td>74</td>
                <td>71</td>
                <td>90</td>
                <td>91</td>
                <td>91</td>
                <td>68</td>
                <td>67</td>
                <td>64</td>
                <td>72</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-3 font-semibold">AMIGS %</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* A or better (grades 7,8,9) Table */}
      <section className="mb-12">
        <h3 className="font-display text-2xl font-bold text-charcoal mb-6 text-center">‘A or better’ (grades 7, 8 or 9)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-navy text-white">
                <th className="py-2 px-3">Subject</th>
                <th className="py-2 px-3">English Lang.</th>
                <th className="py-2 px-3">English Lit</th>
                <th className="py-2 px-3">Maths</th>
                <th className="py-2 px-3">Biology</th>
                <th className="py-2 px-3">Chemistry</th>
                <th className="py-2 px-3">Physics</th>
                <th className="py-2 px-3">Computer Studies</th>
                <th className="py-2 px-3">Citizenship</th>
                <th className="py-2 px-3">History</th>
                <th className="py-2 px-3">Religious Studies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-cream">
                <td className="py-2 px-3 font-semibold">National average – 16 year olds %</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>43</td>
                <td>45</td>
                <td>44</td>
                <td>28</td>
                <td>17</td>
                <td>26</td>
                <td>31</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-3 font-semibold">AMIGS %</td>
                <td>33</td>
                <td>44</td>
                <td>72</td>
                <td>33</td>
                <td>50</td>
                <td>50</td>
                <td>33</td>
                <td>33</td>
                <td>67</td>
                <td>72</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AcademicResults