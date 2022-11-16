import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFilter } from 'redux/filters/filter-actions';
import { selectFilters } from 'redux/filters/filter-selectors';
import { selectVisiblePositions } from 'redux/positions/position-selectors';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList };