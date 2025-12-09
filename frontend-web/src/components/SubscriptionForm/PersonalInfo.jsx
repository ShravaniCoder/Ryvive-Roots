const StepPersonalInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Info</h2>

      <input
        type="number"
        placeholder="Your Age"
        className="border p-2 w-full mb-4"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
    </div>
  );
};

export default StepPersonalInfo;
